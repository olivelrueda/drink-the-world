import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

export default function NavBar() {

return <>
    <form action="" className={styles.formulario}>
        <label htmlFor="search">Buscar</label>
            <input type="search" name="search" className={styles.buscador} placeholder="¿Un tragito?" />

        <label htmlFor="filtro" className={styles.filtro}>Filtrar</label>
            <select name="filtro">
                <option value="ninguno">---</option>
                <option value="lugar">Lugar</option>
                <option value="fecha">Fecha</option>
                <option value="votos">Votos</option>
            </select>
    </form>
    {/* <NavLink className={styles.add} to='/add'>Publica tu experiencia</NavLink> */}
</>
}