import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

const Header = (props) => {
  const { isAuth, email, onLogin } = props;

  return (
    <header className={styles.header}>
      <Logo />
      <div>
        {isAuth ? (
          <div>{email}</div>
        ) : (
          <div onClick={onLogin} className={styles.link}>
            Login
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
