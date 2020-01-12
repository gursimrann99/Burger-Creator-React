import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';
import BurgerCreation from './containers/BurgerCreation/BurgerCreation';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerCreation />
        </Layout>
      </div>
    );
  }
}

export default App;
