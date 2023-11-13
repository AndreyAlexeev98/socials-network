import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout/MainLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MessagesPageContainer from "./pages/MessagesPage/MessagesPageContainer";

// import styles from "./App.module.scss";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainLayout sidebar={props.appState.sidebar} />}
        >
          <Route index element={<ProfilePage store={props.store} />} />
          <Route
            path="/messages"
            element={<MessagesPageContainer store={props.store} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
