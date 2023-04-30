import { Link } from 'react-router-dom'

import useAuth from '../hooks/useAuth'
import styles from './Header.module.css'
import NavBar from './NavBar'

export default function Header() {
    const { isAuthenticated, logout } = useAuth()

    return <>
        <header>
            <img className={styles.logotipoCheers} src='src/assets/images/logotipoCheers.svg' alt="logotipo" />
            <div className={styles.navContainer}>
                <NavBar/>
            </div>
            <button className={styles.login}>
            {isAuthenticated ? 
                    <Link onClick={logout}>Logout</Link> : 
                    <Link to='/login'>Login</Link>}
            </button>
        </header>
    </>
}