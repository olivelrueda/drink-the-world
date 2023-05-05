import { Route, Routes } from 'react-router-dom'
import Notifications from './components/Notifications'
import Add from './views/add'

import Home from './views/home'
import Login from './views/login'
import Registro from './views/registro'

export default function App() {

  return (
    <>
      <Notifications />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/add" element={<Add/>}/>
      </Routes>
    </>
  )
} 