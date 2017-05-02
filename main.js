import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx';

import unicornApp from './reducers/reducers'

let store = createStore(unicornApp);

let rootElement = document.getElementById('app')

ReactDOM.render(

    <Provider store = {store}>
        <App />
    </Provider>,

    rootElement
);
