import Button from './Button'
import styles from './Header.module.css'
import NavBar from './NavBar'

export default function Header() {

    return <>
        <header>
            <img className={styles.logotipoCheers} src='src/assets/images/logotipoCheers.svg' alt="logotipo" />
            <div className={styles.navContainer}>
                <NavBar/>
            </div>
            <Button/>
        </header>
    </>
}