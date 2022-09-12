import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { index, persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
    <Provider store={index}>
        <PersistGate loading="null" persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);