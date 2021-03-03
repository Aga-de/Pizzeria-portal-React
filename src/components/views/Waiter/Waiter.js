import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link className={styles.link} to={`/waiter/order/new`}>NEW Order</Link>
    <Link className={styles.link} to={`/waiter/order/:id`}>Order Info</Link>
  </div>
);

export default Waiter;