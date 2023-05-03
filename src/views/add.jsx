import { toast } from "sonner"
import useServer from "../hooks/useServer"
import { useNavigate } from 'react-router-dom'

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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="place">Lugar</label>
                <input type="text" name="place" id="place" />
            </div>

            <div>
                <label htmlFor="description"></label>
                <textarea name="description" id="description"></textarea>
            </div>

            <div>
                <label htmlFor="file1">Archivo 01</label>
                <input type="file" name="file1" id="file1" />
            </div>

            <div>
                <label htmlFor="file2">Archivo 02</label>
                <input type="file" name="file2" id="file2" />
            </div>

            <div>
                <label htmlFor="file3">Archivo 03</label>
                <input type="file" name="file3" id="file3" />
            </div>

            <button type="submit">Crear entrada</button>
        </form>
    </>
}