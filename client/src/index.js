
import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import App from './App';
import  './style.scss'
const root = createRoot(document.getElementById('root'));

root.render(
 <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);




