import {settings, select, classNames, templates} from './../settings.js';
import utils from './../utils.js';
import CartProduct from './CartProduct.js';

class Cart {
  constructor(element){
    const thisCart = this;

    thisCart.products = [];

    thisCart.getElements(element);

    thisCart.initActions();

  }

  getElements(element) {
    const thisCart = this;

    thisCart.dom = {};

    thisCart.dom.wrapper = element;

    thisCart.dom.deliveryFee = thisCart.dom.wrapper.querySelector(select.cart.deliveryFee);
    thisCart.dom.subtotalPrice = thisCart.dom.wrapper.querySelector(select.cart.subtotalPrice);
    thisCart.dom.totalPrice = thisCart.dom.wrapper.querySelector('.cart__total-price strong');
    thisCart.dom.totalNumber = thisCart.dom.wrapper.querySelector(select.cart.totalNumber);
    thisCart.dom.totalPriceInCart = thisCart.dom.wrapper.querySelector('.cart__order-total .cart__order-price-sum strong');
    thisCart.dom.form = thisCart.dom.wrapper.querySelector(select.cart.form);
    thisCart.dom.phone = thisCart.dom.wrapper.querySelector(select.cart.phone);
    thisCart.dom.address = thisCart.dom.wrapper.querySelector(select.cart.address);

    thisCart.dom.toggleTrigger = thisCart.dom.wrapper.querySelector(select.cart.toggleTrigger);

    thisCart.dom.productList = thisCart.dom.wrapper.querySelector(select.cart.productList);
  }

  initActions() {
    const thisCart = this;

    thisCart.dom.toggleTrigger.addEventListener('click', function (){
      thisCart.dom.wrapper.classList.toggle(classNames.cart.wrapperActive);
    });

    thisCart.dom.productList.addEventListener('updated', function(){
      thisCart.update();
    });

    thisCart.dom.productList.addEventListener('remove', function(event){
      thisCart.remove(event.detail.cartProduct);
    });

    thisCart.dom.form.addEventListener('submit', function(event){
      event.preventDefault();
      thisCart.sendOrder();
    });

  }

  add(menuProduct){
    const thisCart = this;

    const generatedHTML = templates.cartProduct(menuProduct);

    const generatedDOM = utils.createDOMFromHTML(generatedHTML);

    thisCart.dom.productList.appendChild(generatedDOM);

    thisCart.products.push(new CartProduct(menuProduct, generatedDOM));

    thisCart.update();
  }

  update() {
    const thisCart = this;

    const deliveryFee = settings.cart.defaultDeliveryFee;

    thisCart.totalNumber = 0;

    thisCart.subtotalPrice = 0;

    for (let product of thisCart.products) {
      thisCart.totalNumber = thisCart.totalNumber + product.amount;
      thisCart.subtotalPrice = thisCart.subtotalPrice + product.price;
    }

    if (thisCart.totalNumber > 0){
      thisCart.deliveryFee = deliveryFee;
    } else {
      thisCart.deliveryFee = 0;
    }

    thisCart.totalPrice = thisCart.deliveryFee + thisCart.subtotalPrice;

    thisCart.dom.deliveryFee.innerHTML = thisCart.deliveryFee;
    thisCart.dom.subtotalPrice.innerHTML = thisCart.subtotalPrice;
    thisCart.dom.totalPrice.innerHTML = thisCart.totalPrice;
    thisCart.dom.totalNumber.innerHTML = thisCart.totalNumber;
    thisCart.dom.totalPriceInCart.innerHTML = thisCart.totalPrice;

      
  }

  remove(cartProduct){
    const thisCart = this;

    const indexOfProduct = thisCart.products.indexOf(cartProduct);

    const removedProduct = thisCart.products.splice(indexOfProduct, 1);

    cartProduct.dom.wrapper.remove(removedProduct);
      
    thisCart.update();

  }

  sendOrder(){
    const thisCart = this;

    const payload = {
      adress: thisCart.dom.address.value,
      phone: thisCart.dom.phone.value,
      totalPrice: thisCart.totalPrice,
      subtotalPrice: thisCart.subtotalPrice,
      totalNumber: thisCart.totalNumber,
      deliveryFee: thisCart.deliveryFee,
      products: []

    };

    for(let thisCartProduct of thisCart.products) {
      payload.products.push(thisCartProduct.getData());
    }

    const url = settings.db.url + '/' + settings.db.order;

    const options = { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
      });

  }

}

export default Cart;
