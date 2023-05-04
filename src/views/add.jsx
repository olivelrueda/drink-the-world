import { toast } from "sonner"
import useServer from "../hooks/useServer"
import { useNavigate } from 'react-router-dom'
import styles from './add.module.css'



export default function Add() {
    const { post } = useServer()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const newEntry = new FormData(e.target)
        const { data } = await post({ url: '/entries', body: newEntry, hasImage: true })
        if (data.status === 'ok') {
            toast.success('Se ha creado la entrada, Felicitaciones!')
            return navigate('/')
        }
    }

    return <>
        <form className={styles.formAdd} onSubmit={handleSubmit}>

            <img className={styles.isotipo} src="/src/assets/images/isotipoCheers.svg" alt="isotipo" />
            <h2 className={styles.h2}>¡Comparte tu experiencia!</h2>
            <p className={styles.fill}>
                <div><label htmlFor="place">Lugar</label></div>
                <input className={styles.space} type="text" name="place" id="place" placeholder="¿A dónde fuiste?" required/>
            </p>

            <p className={styles.fill}>
                <div><label htmlFor="description">Descripción</label></div>
                <textarea className={styles.text} name="description" id="description" placeholder="Narra tu experiencia" required></textarea>
            </p>

            <div>
                 <label htmlFor="file1">Comparte hasta 3 imágenes</label>
<<<<<<< HEAD
                    <div><input type="file" name="file1" id="file1" required/></div>
                    <div><input type="file" name="file2" id="file2" /></div>
=======
                
                    <div><input type="file" name="file1" id="file1" /></div>
                    
                    <div><input type="file" name="file2" id="file2" /></div>
                    
>>>>>>> d746b524ac1e5fa65f3628c12d16972e1a5fa542
                    <div><input type="file" name="file3" id="file3" /></div>
            </div>

            <button className={styles.publicar} type="submit">Publicar</button>
           

        </form>
    </>
}