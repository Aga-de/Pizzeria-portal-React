import styles from './Homepage.module.scss';

const demoOrders = {
  remote: {
    orders: {
      breakfast: {name: 'salad', cost: '10'},
      lunch: {name: 'coffee', cost: '5'},
    },
  },
  local: {
    orders: {
      morning: {name: 'pizza', cost: '22'},
      afternoon: {name: 'cake', cost: '7'},
    },
  },
};

for (let orderType in demoOrders) {
  const type = demoOrders[orderType];
  console.log(type);
  for (let item in type.orders) {
    const items = type.orders[item];
    console.log(items);
  }
}

<Typography className={styles.title} variant="h4">
        Managment platform for employees
</Typography>;