import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './containers/Layout/Layout';
import BurgerCreation from './containers/BurgerCreation/BurgerCreation';
import Logout from './containers/Auth/Logout/Logout';
import { authCheckState } from './store/actions';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout');
})
const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders');
})
const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
})
class App extends Component {

  componentDidMount() {
    this.props.authCheckState();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" component={BurgerCreation} />
        <Redirect to='/' />
      </Switch>
    );

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/" component={BurgerCreation} />
          <Redirect to='/' />
        </Switch>
      )
    }
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}
export default withRouter(connect(mapStateToProps, { authCheckState })(App));
