import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import {rootReducer} from './reducers/index'
import {Provider} from 'react-redux'
import {App} from './App'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>
  ,
  document.getElementById('root')
);
