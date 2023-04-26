import styles from './Header.module.css'

export default function Header() {

    return <>
        <header>
            <img className={styles.martini} src="/src/assets/images/martini.svg" alt="" />
            <div className={styles.title}>
                <h1>Cheers</h1> 
                <h2>drink the world</h2>    
            </div>
        </header>
    </>
}