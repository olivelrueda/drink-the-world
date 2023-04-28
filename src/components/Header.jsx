import { Link } from 'react-router-dom'

import useAuth from '../hooks/useAuth'
import styles from './Header.module.css'
import martiniImg from '../assets/images/3.png'

export default function Header() {
    const { isAuthenticated, logout } = useAuth()

    return <>
        <header>
            <img className={styles.martini} src={martiniImg} alt="" />
            {isAuthenticated ? 
                <Link className={styles.login} onClick={logout}>Logout</Link> : 
                <Link className={styles.login} to='/login'>Login</Link>}
        </header>
    </>
}