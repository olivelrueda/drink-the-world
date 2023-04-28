import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

export default function Header() {

    return <>
        <header>
            <img className={styles.martini} src="/src/assets/images/3.png" alt="" />
          {/*   <div className={styles.title}>
                <h1>Cheers</h1> 
                <h2>drink the world</h2>    
            </div> */}
            <button className={styles.login}>
            <NavLink to='/login'>Login</NavLink>
            </button>
        </header>
    </>
}