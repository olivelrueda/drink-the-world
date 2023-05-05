import { Link } from "react-router-dom"

import styles from '/src/components/BackHome.module.css'

export default function BackHome() {

    return <>
        <Link to="/"><img src="./src/assets/images/casa.svg" alt="casa" className={styles.casa}/></Link>
    </>
}