import styles from './Log.module.css'

export default function Log() {

    return <>
    <form className={styles.form}>
      <div>
        <div className={styles.input}>
          <label htmlFor="email" className={styles.label}>Correo</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="nombre@ejemplo.com"
          />
        </div>

        <div className={styles.input}>
          <label htmlFor="password" className={styles.label}>Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            required
            placeholder="******"
          />
        </div>
      </div>

      <nav>
        <button type="submit" className={styles.submitButton}>Iniciar Sesión</button>
      </nav>
    </form>
    </>
}