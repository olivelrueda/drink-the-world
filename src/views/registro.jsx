import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import useServer from "../hooks/useServer"
import styles from './registro.module.css'
import LoginHeader from '../components/LoginHeader'
import Inputs from '../components/Inputs'
import Button from '../components/Button'
import BackHome from '../components/BackHome'

export default function Registro() {
    const { post } = useServer()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const credentials = Object.fromEntries(new FormData(e.target))
        const { data } = await post({ url: '/users', body: credentials })
        if (data) {
            toast.success('Se ha creado el usuario, inicia sesión para empezar')
            return navigate('/login')
        }
    }

    return <>
        <BackHome/>
        <form className={styles.form} onSubmit={handleSubmit}>
            <LoginHeader content="Crea tu cuenta"/>
            <Inputs/>
            <Button buttonContent="Comenzar"/>
        </form>
    </>
}
