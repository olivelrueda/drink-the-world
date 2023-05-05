import { apiURL } from "../config"
import useAuth from "../hooks/useAuth"

export default function Publicacion({viaje, timeAgo, styles}) {
    const { user } = useAuth()
    return <li>
    <h2 className={styles.place}>{viaje.place}</h2>
    <h3 className={styles.date}>{timeAgo.format(new Date(viaje.date))}</h3>
    {viaje.photo && (
    <div>
        {(viaje.photo.map((photo) => 
        <div key={photo.id}>
            <img className={styles.img} src={`${apiURL}/${photo.photo}`} alt="imagen del viaje" />
        </div>
        ))}
    </div>
    )}
    <p className={styles.description}>{viaje.description}</p>
    <h4 className={styles.votos}>{Number.parseInt(viaje.votes)}</h4>
    {/* <p className={styles.space}>{user && user.id === viaje.user_id ? "Es tu viaje" : "No es su viaje"}</p> */}
</li>    
}
