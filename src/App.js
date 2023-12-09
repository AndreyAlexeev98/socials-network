import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout/MainLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MessagesPageContainer from "./pages/MessagesPage/MessagesPageContainer";
import UsersPageContainer from "./pages/UsersPage/UsersPageContainer";

// import styles from "./App.module.scss";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/messages" element={<MessagesPageContainer />} />
          <Route path="/users" element={<UsersPageContainer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
