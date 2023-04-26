import { Route, Routes } from 'react-router-dom'

// Views
import Home from './views/home'
import Login from './views/login'
import Signup from './views/signup'

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  )
}