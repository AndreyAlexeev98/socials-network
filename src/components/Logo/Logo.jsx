import logo from '../../media/img/logo.svg'

import styles from './Logo.module.scss'

const Logo = () => {
    return (
        <div className={styles.root}>
            <img src={logo} alt="Snaps logo" className={styles.img}/>
        </div>
    );
}

export default Logo;