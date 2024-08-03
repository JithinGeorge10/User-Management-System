import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
