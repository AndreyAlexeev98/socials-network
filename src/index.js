import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntiredThree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        appState={state}
        addPost={store.addPost.bind(store)}
        postChange={store.postChange.bind(store)}
      />
    </React.StrictMode>
  );
};

rerenderEntiredThree(store.getState());

store.subscribe(rerenderEntiredThree);
