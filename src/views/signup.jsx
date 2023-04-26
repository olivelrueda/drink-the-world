import { useNavigate } from 'react-router-dom'

import useServer from "../hooks/useServer"
import styles from './signup.module.css'

export default function Signup() {
    const { post } = useServer()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const credentials = Object.fromEntries(new FormData(e.target))
        const { data } = await post({ url: '/users', body: credentials })
        if (data) return navigate('/login')
    }

    return <>
        <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <div>Crear cuenta nueva</div>  
            <div className={styles.input}>
            <label htmlFor="email" className={styles.label}>Correo</label>
            <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="nombre@ejemplo.com"
            />
            </div>

            <div className={styles.input}>
            <label htmlFor="password" className={styles.label}>Contraseña</label>
            <input
                id="password"
                name="pwd"
                type="password"
                autoComplete="password"
                required
                placeholder="******"
            />
            </div>
        </div>

        <nav>
            <button type="submit" className={styles.submitButton}>Sign up</button>
        </nav>
        </form>
    </>
}
