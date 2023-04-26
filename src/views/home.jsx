import Header from "../components/Header"
import useAuth from "../hooks/useAuth"

export default function Home() {

    const { isAuthenticated, logout } = useAuth()

    return <>
        <Header/>
        <p>{isAuthenticated ? <button onClick={logout}>Logout</button> : 'El usuario no esta autenticado' }</p>
    </>
}
