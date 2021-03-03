import { templates, select} from '../settings.js';
import {app} from '../app.js';

class Home {
  constructor(){
    const thisHome = this;

    thisHome.render();
    thisHome.toSubpage();

  }

  render(){
    const thisHome = this;

    const generatedHTML = templates.homePage();

    thisHome.dom = {};

    thisHome.dom.wrapper = document.querySelector(select.containerOf.home);

    thisHome.dom.wrapper.innerHTML = generatedHTML;

    thisHome.dom.order = thisHome.dom.wrapper.querySelector(select.home.order);
    thisHome.dom.booking = thisHome.dom.wrapper.querySelector(select.home.booking);
    thisHome.dom.openingHours = thisHome.dom.wrapper.querySelector(select.home.openingHours),
    thisHome.dom.carousel = thisHome.dom.wrapper.querySelector(select.home.carousel),
    thisHome.dom.gallery = thisHome.dom.wrapper.querySelector(select.home.gallery);
    thisHome.links = thisHome.dom.wrapper.querySelectorAll('.boxes a');

  }

  toSubpage(){
    const thisHome = this;

    for (let link of thisHome.links) {
      link.addEventListener('click', function() {
        const clickedElement = this;

        const pageId = clickedElement.getAttribute('href').replace('#', '');

        app.activatePage(pageId);

        window.location.hash = '#/' + pageId;
      });

    }
  }
}
export default Home;