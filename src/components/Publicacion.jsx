import { apiURL } from '../config';
import { useState } from 'react';

import useAuth from '../hooks/useAuth';
import useServer from '../hooks/useServer';
// import StartRanking from "./StartRanking"

export default function Publicacion({ viaje, timeAgo, styles }) {
  const { user } = useAuth();
  const [votesCounter, setVotesCounter] = useState(viaje.map);

  const { post } = useServer();

  const submitVote = async (score) => {
    const { data } = await post({
      url: `/entries/${viaje.id}/votes`,
      body: { vote: score },
      hasImage: false,
    });
    console.log('vote response', data);
  };

  return (
    <li>
      <h2 className={styles.place}>{viaje.place}</h2>
      <p>
        {user && user.id === viaje.user_id ? 'PUEDES VOTAR' : 'NO PUEDES VOTAR'}
      </p>
      <h3 className={styles.date}>{timeAgo.format(new Date(viaje.date))}</h3>
      {viaje.photo && (
        <div>
          {viaje.photo.map((photo) => (
            <div key={photo.id}>
              <img
                className={styles.img}
                src={`${apiURL}/${photo.photo}`}
                alt="imagen del viaje"
              />
            </div>
          ))}
        </div>
      )}
      <p className={styles.description}>{viaje.description}</p>
      {new Array(5).fill(0).map((_, i) => (
        <button
          key={i}
          onClick={() => {
            submitVote(i + 1);
          }}
        >
          {i + 1}
        </button>
      ))}
      {/* <h4 className={styles.votos}>{Number.parseInt(viaje.votes)}</h4> */}
      {/* <StartRanking/> */}
      {/* <p className={styles.space}>{user && user.id === viaje.user_id ? "Es tu viaje" : "No es su viaje"}</p> */}
    </li>
  );
}
