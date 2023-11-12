import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout/MainLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MessagesPage from "./pages/MessagesPage/MessagesPage";

import store from "./redux/redux-store";

// import styles from "./App.module.scss";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainLayout sidebar={props.appState.sidebar} />}
        >
          <Route
            index
            element={
              <ProfilePage
                profileState={props.appState.profile}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/messages"
            element={<MessagesPage store={props.store} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
