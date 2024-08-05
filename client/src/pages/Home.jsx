import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyJWT } from '../utils/apiCall'
import Loading from '../components/LoadingPage.jsx'

function Home() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async function () {
      try {
        console.log('home');
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
  }, [])


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
    <div className="text-3xl">
      Welcome
      <button
        onClick={handleLogout}
        className="bg-gradient-to-r from-red-800 to-red-500 hover:from-red-900 hover:to-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
        type="submit"
      >
        Logout
      </button>
    </div>
  )
}

export default Home
