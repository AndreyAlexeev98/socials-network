import {BrowserRouter ,Route} from 'react-router-dom';

import Sidebar from "../../components/Sidebar/Sidebar";
import Profile from "../../pages/Profile/Profile";
import MessagesPage from "../../pages/Messages/MessagesPage";


import styles from "./MainLayout.module.scss";

const Main = () => {
  return (
    <BrowserRouter>
      <main className={styles.root}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={MessagesPage} />
        </div>
      </main>
    </BrowserRouter>
  );
};

export default Main;
