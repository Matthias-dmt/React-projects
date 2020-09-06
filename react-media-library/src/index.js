import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";

// Redux
import { createStore, applyMiddleware } from "redux";

// thunk permet la gestion de l'asynchrone dans Redux
import thunk from "redux-thunk";

// Provider pour globaliser le store
import { Provider } from "react-redux";

import authorsReducer from "./reducer/authors";

const store = createStore(authorsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-pbrzcmkl.us.auth0.com"
      clientId="jtItkI7PaU54Zh16GiUSJNq4Ju51DRnp"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
