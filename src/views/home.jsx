import { useEffect, useState } from "react"
import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'

import Header from "../components/Header"
import useServer from "../hooks/useServer"
import styles from './home.module.css'
import Publicacion from "../components/Publicacion"

TimeAgo.addDefaultLocale(es)
const timeAgo = new TimeAgo('es-ES')

export default function Home() {
    const [viajes, setViajes] = useState([])
    const { get } = useServer()


    const getViajes = async () => {
        const { data: { data } } = await get({ url: '/entries' })
        setViajes(data)
    }

    useEffect(() => {
        getViajes()
    }, [])

    return <>
        <Header />
        {viajes && (
        <ul className={styles.viajes}>
            {viajes.map((viaje) => (
                <Publicacion key={viaje.id} viaje={viaje} timeAgo={timeAgo} styles={styles} />
            ))}
        </ul>
        )}
    </>     
}