import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import burgerCreationReducer from './store/reducers/burgerCreation';
import ordersReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({
    burgerCreation: burgerCreationReducer,
    order: ordersReducer,
    auth: authReducer
});


 //const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
