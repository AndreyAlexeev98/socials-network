import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import MainLayout from "./layout/MainLayout/MainLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MessagesPage from "./pages/MessagesPage/MessagesPage";

// import styles from "./App.module.scss";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ProfilePage userData={props.userData} posts={props.posts} />} />
          <Route path="/messages" element={<MessagesPage messages={props.messages} chats={props.chats} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;