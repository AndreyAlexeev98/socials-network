import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import MainLayout from "./layout/MainLayout/MainLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MessagesPage from "./pages/MessagesPage/MessagesPage";

// import styles from "./App.module.scss";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout sidebar={props.appState.sidebar} />}>
          <Route index element={<ProfilePage addPost={props.addPost} userData={props.appState.profile.userData} posts={props.appState.profile.posts} />} />
          <Route path="/messages" element={<MessagesPage messages={props.appState.messages.messages} chats={props.appState.messages.chats} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;