import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import postReducer from './reducers/postReducer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const store = createStore(postReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
