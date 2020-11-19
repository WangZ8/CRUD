import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
//import store from './store';
import index from "./reducers";
import { createStore } from "redux";
import {Provider} from 'react-redux';

const stores = createStore(
  index,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
var element = React.createElement('h1', { classname: 'greeting'}, 'Hello, world!');
ReactDOM.render(
  element, 
  document.getElementById('root')
);*/
ReactDOM.render(<Provider store = {stores}><App /></Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
