import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import Homepage from './components/views/Homepage/Homepage';


const App = () => (
  <BrowserRouter basename={'/panel'}>
    <MainLayout>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
        <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
        <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
        <Route exact path={process.env.PUBLIC_URL + `/tables/booking/:id`} component={Tables} />
        <Route exact path={process.env.PUBLIC_URL + `/tables/new`} component={Tables} />
        <Route exact path={process.env.PUBLIC_URL + `/tables/events/:id`} component={Tables} />
        <Route exact path={process.env.PUBLIC_URL + `/tables/events/new`} component={Tables} />
        <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
        <Route exact path={process.env.PUBLIC_URL + `/waiter/order/new`} component={Waiter} />
        <Route exact path={process.env.PUBLIC_URL + `/waiter/order/:id`} component={Waiter} />
        <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
