import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout/MainLayout";
import MessagesPageContainer from "./pages/MessagesPage/MessagesPageContainer";
import UsersPageContainer from "./pages/UsersPage/UsersPageContainer";
import ProfileContainer from "./pages/ProfilePage/ProfileContainer";

// import styles from "./App.module.scss";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/profile/:profileId" element={<ProfileContainer />} />
          <Route path="/messages" element={<MessagesPageContainer />} />
          <Route path="/users" element={<UsersPageContainer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
