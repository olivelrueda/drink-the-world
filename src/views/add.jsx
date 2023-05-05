import { toast } from "sonner"
import { useNavigate } from 'react-router-dom'

import useServer from "../hooks/useServer"
import BackHome from '../components/BackHome'
import LoginHeader from "../components/LoginHeader"
import Button from '../components/Button'

import styles from './add.module.css'

export default function Add() {
    const { post } = useServer()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const newEntry = new FormData(e.target)
        const { data } = await post({ url: '/entries', body: newEntry, hasImage: true })
        if (data.status === 'ok') {
            toast.success('Se ha creado tu publicación')
            return navigate('/')
        }
    }

    return <>
        <BackHome/>
        <form className={styles.formAdd} onSubmit={handleSubmit}>
            <LoginHeader content="Comparte tu experiencia"/>

            <div className={styles.fill}>
                <label htmlFor="place">Lugar</label>
                <input className={styles.space} type="text" name="place" id="place" placeholder="¿A dónde fuiste?" required/>
            </div>

            <div className={styles.fill}>
                <label htmlFor="description">Descripción</label>
                <textarea className={styles.space} name="description" id="description" placeholder="¿Cómo fue?" required></textarea>
            </div>

            <div className={styles.fill}>
                <label htmlFor="file1">Sube tus imágenes</label>
                <input className={styles.space} type="file" name="file1" id="file1" required/>
                <input className={styles.space} type="file" name="file2" id="file2" />
                <input className={styles.space} type="file" name="file3" id="file3" />
            </div>
            <Button buttonContent="Publicar"/>
        </form>
    </>
}