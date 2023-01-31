import styles from './Button.module.scss';

const Button = (props) => {
    return (
        <button type="button" className={styles.root}>
            <span className={styles.text}>{props.text}</span>
        </button>
    )
}

export default Button;