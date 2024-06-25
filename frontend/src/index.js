/* --------------------------------- Imports -------------------------------- */

// [Import react components]
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./store";

// [Import local folders/files]
import App from './App';
import './index.scss'

// [Import axios]
import axios from "axios";

// Render App to DOM root 
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = "http://localhost:5000";

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
