import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
    <App />
  </Provider>
);



