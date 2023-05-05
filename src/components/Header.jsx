import Button from './Button';
import styles from './Header.module.css';
import NavBar from './NavBar';

import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Header({ handleUpdateFilters }) {
  const { isAuthenticated, logout } = useAuth();



  return (
    <>
      <header>
        <img
          className={styles.logotipoCheers}
          src="src/assets/images/logotipoCheers.svg"
          alt="logotipo"
        />
        <NavBar handleUpdateFilters={handleUpdateFilters} />
        <div className={styles.buttonContainer}>
          <Button
            buttonContent={
              isAuthenticated ? (
                <Link onClick={logout}>Logout</Link>
              ) : (
                <Link to="/login">Login</Link>
              )
            }
          />
        </div>
      </header>
    </>
  );
}
