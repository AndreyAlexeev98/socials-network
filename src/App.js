import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import MainLayout from "./layout/MainLayout/MainLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MessagesPage from "./pages/MessagesPage/MessagesPage";

// import styles from "./App.module.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ProfilePage />} />
          <Route path="/messages" element={<MessagesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;