import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import './index.css';
import { App } from './App';
import configureStore from './store';


ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);


