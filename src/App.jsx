import { Route, Routes } from 'react-router-dom'

// Views
import Home from './views/home'
import Login from './views/login'
import Registro from './views/registro'

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registro" element={<Registro/>}/>
      </Routes>
    </>
  )
}