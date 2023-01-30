import Logo from '../Logo/Logo';
import styles from './Header.module.scss'
import globalStyles from '../../App.module.scss';

console.log(globalStyles);

const Header = () => {
    return (
      <header className={styles.header}>
        <div className={globalStyles.container}>
          <Logo />
        </div>
      </header>
    );
};

export default Header;