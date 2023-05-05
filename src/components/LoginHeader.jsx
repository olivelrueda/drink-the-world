import { Link } from 'react-router-dom'

import styles from './LoginHeader.module.css'

export default function LoginHeader({content}) {
return <>
        <Link to="/">
                <img className={styles.isotipo} src="/src/assets/images/isotipoCheers.svg" alt="isotipo" />
        </Link>
        <h2>{content}</h2>
</>
}