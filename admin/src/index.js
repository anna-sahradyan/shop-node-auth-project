import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
 import {Provider} from "react-redux";
 import { index, persistor } from "./store";
 import { PersistGate } from 'redux-persist/integration/react';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Provider store={index}>
         <PersistGate loading={null} persistor={persistor}>
            <Router>
                <App/>
            </Router>
         </PersistGate>
     </Provider>

);
