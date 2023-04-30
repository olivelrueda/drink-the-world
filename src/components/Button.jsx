import { Link } from 'react-router-dom'

import styles from './Button.module.css'
import useAuth from '../hooks/useAuth'


export default function Button() {

    const { isAuthenticated, logout } = useAuth()
    return <>
                    <button className={styles.login}>{isAuthenticated ? 
                    <Link onClick={logout}>Logout</Link> : 
                    <Link to='/login'>Login</Link>}</button>
        
    </>
}