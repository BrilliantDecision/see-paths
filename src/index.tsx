import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { sagaMiddlewaere, setupStore } from "./store";
import routeSaga from "./store/sagas/route/route";

const store = setupStore();
sagaMiddlewaere.run(routeSaga);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
