import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import useServer from "../hooks/useServer"
import styles from './login.module.css'

export default function Login() {
    const { post } = useServer()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const credentials = Object.fromEntries(new FormData(e.target))
        const { data } = await post({ url: '/users/login', body: credentials })
        if (data) return navigate('/')
    }

return <>
    <form className={styles.form} onSubmit={handleSubmit}>
        <img className={styles.isotipo} src="/src/assets/images/isotipoCheers.svg" alt="isotipo" />
        <h2>Inicia sesión</h2>
            <div>
                <label htmlFor="email" className={styles.label}>Correo</label>
                <input
                    className={styles.input}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="nombre@ejemplo.com"
                />
            </div>

            <div>
                <label htmlFor="password" className={styles.label}>Contraseña</label>
                <input
                    className={styles.input}
                    id="password"
                    name="pwd"
                    type="password"
                    autoComplete="password"
                    required
                    placeholder="******"
            />
            </div>

        <button type="submit" className={styles.submitButton}>✔</button>
        <p className={styles.p}> ¿No tienes cuenta?</p>
        <NavLink className={styles.registro} to='/registro'>¡Regístrate!</NavLink>
    </form>
</>
}
