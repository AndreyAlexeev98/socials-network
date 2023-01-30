import Content from "../../components/Content/Content";
import Sidebar from "../../components/Sidebar/Sidebar";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.root}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
    </main>
  );
};

export default Main;
