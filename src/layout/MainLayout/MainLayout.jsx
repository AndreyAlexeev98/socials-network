import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import SidebarContainer from "../../components/Sidebar/SidebarContainer";
import Footer from "../../components/Footer/Footer";

import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Header />
        </div>
      </div>
      <div className={`${styles.content} ${styles.container}`}>
        <div className={styles.sidebar}>
          <SidebarContainer />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.container}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
