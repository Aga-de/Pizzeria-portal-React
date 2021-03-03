import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link className={styles.link} to={`/tables/booking/:id`}>Bookings Info</Link>
    <Link className={styles.link} to={`/tables/new`}>NEW Booking</Link>
    <Link className={styles.link} to={`/tables/events/:id`}>Events Info</Link>
    <Link className={styles.link} to={`/tables/events/new`}>NEW Event</Link>
  </div>
);

export default Tables;