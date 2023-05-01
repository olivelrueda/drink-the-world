import { useEffect, useState } from "react"
import { Link } from "react"

import Editar from "../components/Editar"
import Header from "../components/Header"
import useAuth from "../hooks/useAuth"
import useServer from "../hooks/useServer"
import { apiURL } from '../config';
import styles from './home.module.css'

export default function Home() {
    const [viajes, setViajes] = useState([])
    const { get } = useServer()
    const { user } = useAuth()

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
            <li key={viaje.id}>
                <h2 className={styles.place}>{viaje.place}</h2>
                <h3 className={styles.date}>{viaje.date}</h3>
                {viaje.photo && (
                <div>
                    {viaje.photo.map((photo) => (
                    <div key={photo.id}>
                        <img className={styles.img} src={`${apiURL}/${photo.photo}`} alt="imagen del viaje" />
                    </div>
                    ))}
                </div>
                )}
                <p className={styles.description}>{viaje.description}</p>
                <h4 className={styles.votos}>{viaje.votes}</h4>
                <p className={styles.space}>{user && user.id === viaje.user_id ? "Es tu viaje" : "No es su viaje"}</p>
            </li>
            ))}
        </ul>
        )}
    </>     
}