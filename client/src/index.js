import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./store/index";

const store = configureStore({
    reducer: rootReducer,

});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);
