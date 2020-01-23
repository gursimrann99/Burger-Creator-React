import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import BurgerCreation from './containers/BurgerCreation/BurgerCreation';
import Checkout from '../src/containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders}/>
            <Route path="/" component={BurgerCreation} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
