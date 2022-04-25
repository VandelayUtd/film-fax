import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';

import './index.css';
import App from './App';
import store from "./redux/store"
import { Provider } from "react-redux"

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);


