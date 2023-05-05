import { useState } from 'react';

import styles from './NavBar.module.css';

export default function NavBar({ handleUpdateFilters }) {

  const [keyword, setKeyword] = useState('');
  const [orderBy, setOrderBy] = useState('date');
  const [sorting, setSorting] = useState('ASC');

  return (
    <form action="" className={styles.formulario}>
      <label htmlFor="search">Buscar</label>
      <input
        type="search"
        name="search"
        className={styles.buscador}
        placeholder="¿Un tragito?"
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />

      <label htmlFor="filtro" className={styles.filtro}>Filtrar</label>
      <select
        name="orderBy"
        value={orderBy}
        className={styles.order}
        onChange={(e) => {
          setOrderBy(e.target.value);
        }}
      >

        <option value="date">Fecha</option>
        <option value="votes">Votos</option>
      </select>
      <select
        name="sorting"
        value={sorting}
        className={styles.order}
        onChange={(e) => {
          setSorting(e.target.value);
        }}
      >

        <option value="DESC">Reciente</option>
        <option value="ASC">Antigüo</option>
      </select>

      <div className={styles.lupaContainer}>
        <img src="../src/assets/images/lupa.svg" alt="lupa" className={styles.lupa} onClick={() => {
        handleUpdateFilters(keyword, orderBy, sorting);
        }}/>
      </div>
    </form>
  );
}