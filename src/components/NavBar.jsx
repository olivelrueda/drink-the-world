import { useState } from "react";

import styles from './NavBar.module.css'

export default function NavBar() {

    const [filtro, setFiltro] = useState('ninguno');


const handleFiltroChange = (event) => {
  setFiltro(event.target.value);
};

return <>
        <form action="" className={styles.formulario}>
            <label htmlFor="search">Buscar</label>
                <input type="search" name="search" className={styles.buscador} placeholder="¿Un tragito?" />

            <label htmlFor="filtro" className={styles.filtro}>Filtrar</label>
                <select name="filtro" value="filtro" onChange={handleFiltroChange}>
                    <option value="ninguno">---</option>
                    <optgroup label="Lugar">
                        <option value="abc">A - Z</option>
                    </optgroup>
                    <optgroup label="Fecha">
                        <option value="reciente">Reciente</option>
                        <option value="antiguo">Antigüo</option>
                    </optgroup>
                    <optgroup label="Votos">
                        <option value="masVotado">➕ Votado</option>
                        <option value="menosVotado">➖ Votado</option>
                    </optgroup> 
                </select>
        </form>
    </>
} 

