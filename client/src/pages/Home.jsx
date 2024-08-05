import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyJWT } from '../utils/apiCall'
import Loading from '../components/LoadingPage.jsx'
import Navbar from '../components/Navbar.jsx'

function Home() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async function () {
      try {
        const isLoggedIn = await verifyJWT()
        if (!isLoggedIn) {
          navigate('/')
        }
      } catch (error) {
        navigate('/')
      } finally {
        setIsLoading(false)
      }
    })()
  }, [navigate])

  if (isLoading) return <Loading />

  const handleLogout = () => {
    try {
      document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      sessionStorage.clear();
      localStorage.clear();
      navigate('/');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar></Navbar>
      <br />
      <h1 className="flex items-center justify-center text-3xl font-bold text-gray-800 mb-2">Welcome to Home page</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mt-8 flex flex-col md:flex-row">
        <div className="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center mb-4 md:mb-0">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-gray-300"
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-center pl-0 md:pl-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Username:</h1>
          <p className="text-gray-600 mb-4">Phone:</p>
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-red-800 to-red-500 hover:from-red-900 hover:to-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
