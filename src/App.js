import React from 'react'
import Header from './components/header/Header';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllProducts from './components/body/AllProducts';
import ProductDetail from './components/body/ProductDetail';
import CartPage from './components/body/CartPage';
import BillingPage from './components/body/BillingPage';
import Filter from './components/utils/Filter';

function App() {
  return (
    <>
    <Router>
    <Header />
    <Switch>
    <Route path='/' exact >
      <Filter />
      <AllProducts />
    </Route>
    <Route path='/product/:id' component={ProductDetail} exact />
    <Route path='/cartpage' component={CartPage} exact />
    <Route path='/billingpage' component={BillingPage} exact />
    <Route>404 Not Found</Route>
    </Switch>
    </Router>
    </>
  )
}

export default App
