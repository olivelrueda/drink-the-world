import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import LoginHeader from '../components/LoginHeader'
import Inputs from '../components/Inputs'
import Button from '../components/Button'
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
        <LoginHeader/>
        <Inputs/>
        <Button/>
        <p className={styles.p}> ¿No tienes cuenta?</p>
        <NavLink className={styles.registro} to='/registro'>¡Regístrate!</NavLink>
    </form>
</>
}