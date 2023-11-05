import React from "react";
import ReactDOM from "react-dom/client";

import App from "../App";
import { addPost } from "./state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerender = (state) => {
  console.log("state - ", state);

  root.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} />
    </React.StrictMode>
  );
};
