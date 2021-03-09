import React from 'react';
import { NavLink } from 'react-router-dom' ;
import Button from '@material-ui/core/Button';
import styles from './PageNav.module.scss';

const PageNav = () => {
  return (
    <nav className={styles.component}>
      <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName={styles.active}>Home</Button>
      <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName={styles.active}>Login</Button>
      <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName={styles.active}>Tables</Button>
      <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName={styles.active}>Waiter</Button>
      <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName={styles.active}>Kitchen</Button>
    </nav>
  );
};

export default PageNav; 