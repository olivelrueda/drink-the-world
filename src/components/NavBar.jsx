import { Link } from "react-router-dom";
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
        <label className={styles.labelMas} htmlFor="mas">Publicar</label>
            <Link to='/add'><img className={styles.mas} src="../src/assets/images/mas.svg" alt="mas"/></Link>
    </>
}  