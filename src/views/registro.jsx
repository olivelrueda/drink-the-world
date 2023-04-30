import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import useServer from "../hooks/useServer"
import styles from './registro.module.css'
import LoginHeader from '../components/LoginHeader'
import Inputs from '../components/Inputs'
import Button from '../components/Button'

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
            <LoginHeader/>
            <Inputs/>
            <Button/>
        </form>
    </>
/*     Generar toast anunciando que se ha hecho el registro satisfactoria y indicando que deben iniciar sesion que su nueva cuenta 
 */}
