import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import useServer from "../hooks/useServer"
import styles from './registro.module.css'
import Inputs from '../components/Inputs'

export default function Registro() {
    const { post } = useServer()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const credentials = Object.fromEntries(new FormData(e.target))
        const { data } = await post({ url: '/users', body: credentials })
        if (data) {
            toast.success('Se ha creado el usuario, por favor inicia sesión')
            return navigate('/login')
        }
    }

    return <>
        <form className={styles.form} onSubmit={handleSubmit}>
        <img className={styles.isotipo} src="/src/assets/images/4.png" alt="" />

        <div><h2>Crea tu cuenta</h2></div>
        {/* <div>
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
        </div> */}

        <Inputs/>

        <nav>
            <button type="submit" className={styles.registro}>Regístrate</button>
        </nav>
        </form>
    </>
/*     Generar toast anunciando que se ha hecho el registro satisfactoria y indicando que deben iniciar sesion que su nueva cuenta 
 */}
