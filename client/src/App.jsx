import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import AdminHome from './pages/AdminHome'
import Adduser from './pages/Adduser'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/adminhome' element={<AdminHome />} />
          <Route path='/addUser' element={<Adduser />} />
          <Route path='*' element={<Navigate to='/' />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
