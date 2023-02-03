import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import MainLayout from "./layout/MainLayout/MainLayout";
import Profile from "./pages/Profile/Profile";
import MessagesPage from "./pages/Messages/MessagesPage";

// import styles from "./App.module.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Profile />} />
          <Route path="/messages" element={<MessagesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;