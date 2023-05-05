import styles from './Button.module.css'

export default function Button({buttonContent}) {

    return <>
            <button className={styles.login}>{buttonContent}</button>
    </>
}