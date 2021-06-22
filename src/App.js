import React from 'react'
import Header from './components/header/Header';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllProducts from './components/body/AllProducts';
import ProductDetail from './components/body/ProductDetail';
import CartPage from './components/body/CartPage';
import BillingPage from './components/body/BillingPage';
import Filter from './components/utils/Filter';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signup/SignUp';

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
    <Route path='/signin' component={SignIn} exact />
    <Route path='/signup' component={SignUp} exact />
    <Route>404 Not Found</Route>
    </Switch>
    </Router>
    </>
  )
}

export default App
