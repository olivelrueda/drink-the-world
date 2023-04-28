import { useEffect, useState } from "react"

import Header from "../components/Header"
import useAuth from "../hooks/useAuth"
import useServer from "../hooks/useServer"

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
        <Header/>
        {viajes && <ul className="viajes">
            {viajes.map(viaje => <li key={viaje.id} className="viaje">
            <p>{viaje.place}</p>
            <p>{user.id === viaje.user_id ? 'Es el dueño del viaje' : 'No es su viaje' }</p>
            </li>)}
        </ul>}
    </>
}
