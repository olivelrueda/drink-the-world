import styles from './Inputs.module.css'

export default function Inputs() {

    return <>
        <div>
            <label htmlFor="email" className={styles.label}>Correo</label>
            <input
                className={styles.input}
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="correo@ejemplo.com"
            />
        </div>

        <div>
            <label htmlFor="password" className={styles.label}>Contraseña</label>
            <input
                className={styles.input}
                name="pwd"
                type="password"
                autoComplete="password"
                required
                placeholder="******"
            />
        </div>
    </>
}