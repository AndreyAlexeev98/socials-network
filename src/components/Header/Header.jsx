import Logo from "../Logo/Logo";
import Avatar from "../../assets/img/auth-avatar.jpg";
import PlaceholderAva from "../../assets/img/no-auth-avatar.png";
import styles from "./Header.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";

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
