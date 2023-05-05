import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import es from 'javascript-time-ago/locale/es';

import Header from '../components/Header';
import useServer from '../hooks/useServer';
import Publicacion from '../components/Publicacion';
import useAuth from '../hooks/useAuth';

import styles from './home.module.css';

TimeAgo.addDefaultLocale(es);
const timeAgo = new TimeAgo('es-ES');

export default function Home() {
  const [viajes, setViajes] = useState([]);
  const { get } = useServer();
  const { isAuthenticated } = useAuth();

  const getViajes = async (search = '', order = 'date', direction = 'DESC') => {
    const {
      data: { data },
    } = await get({
      url: `/entries?search=${search}&order=${order}&direction=${direction}`,
    });
    setViajes(data);
  };

  useEffect(() => {
    getViajes();
  }, []);

  return (
    <>
      <Header handleUpdateFilters={getViajes} />
      {isAuthenticated && (
        <Link to="/add">
          <img
            className={styles.mas}
            src="../src/assets/images/mas.svg"
            alt="mas"
          />
        </Link>
      )}
      {viajes && (
        <ul className={styles.viajes}>
          {viajes.map((viaje) => (
            <Publicacion
              key={viaje.id}
              viaje={viaje}
              timeAgo={timeAgo}
              styles={styles}
            />
          ))}
        </ul>
      )}
    </>
  );
}
