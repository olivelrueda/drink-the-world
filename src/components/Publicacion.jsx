import { apiURL } from "../config"
import { useState } from "react";

import useAuth from "../hooks/useAuth"
import Button from './Button'
import useServer from '../hooks/useServer';

export default function Publicacion({ viaje, timeAgo, styles }) {

  const { user, isAuthenticated } = useAuth();
  const [filledStars, setFilledStars] = useState(0);
  const { post } = useServer();

  const submitVote = async (score) => {
    const { data } = await post({
      url: `/entries/${viaje.id}/votes`,
      body: { vote: score }
 
    });
  };

  const editarTexto = async (cambios) => {
    const { data } = await patch({
      url: `/entries/${viaje.id}/`,
      body: { message: changes}
    });
    console.log('modify', data)
  };

  const userSvg = <img src="/src/assets/images/user.svg" alt="svg de usuario" style={{height: "1em", width:"1em"}}/>;
  const starArray = Array(5).fill(null);

  return (
    <li>
      <h2 className={styles.place}>{viaje.place}</h2>
      <h3 className={styles.date}>{timeAgo.format(new Date(viaje.date))}</h3>
      <p className={styles.mail}>{userSvg} {viaje.email}</p>
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
      <div className={styles.starContainer}>
        {(isAuthenticated && (user && user.id === viaje.user_id ? null : starArray.map((_, i) => (
          <img
            src={i < filledStars ? '/src/assets/images/starFill.svg' : '/src/assets/images/star.svg'}
            className={styles.star}
            key={i}
            onClick={() => {
              setFilledStars(i + 1);
              submitVote(i + 1);
            }}
          />
        ))))}
      </div>

      <div className={styles.editar}>
       
         {(isAuthenticated && (user && user.id === viaje.user_id && (
          <Button buttonContent='Editar' />)
          ))} 
      </div>

    </li>
  );
}