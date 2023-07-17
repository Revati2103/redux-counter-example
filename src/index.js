import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import allReducers from "./redux/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

//The created store
const store = createStore(allReducers);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
