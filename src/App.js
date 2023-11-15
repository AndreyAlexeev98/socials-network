import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout/MainLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MessagesPageContainer from "./pages/MessagesPage/MessagesPageContainer";

// import styles from "./App.module.scss";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ProfilePage />} />
          <Route path="/messages" element={<MessagesPageContainer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
