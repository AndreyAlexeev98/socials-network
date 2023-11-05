import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import state, { addPost, subscribe } from "./redux/state";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntiredThree = (state) => {
  console.log("state - ", state);

  root.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} />
    </React.StrictMode>
  );
};

rerenderEntiredThree(state);

subscribe(rerenderEntiredThree);
