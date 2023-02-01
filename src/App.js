import styles from "./App.module.scss";

import Header from "./components/Header/Header";
import Main from "./layout/MainLayout/MainLayout";
import Footer from "./components/Footer/Footer";

console.log(styles);

function App() {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={`${styles.page} ${styles.container}`}>
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
