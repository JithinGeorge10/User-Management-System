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
      <hr />
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl mx-auto mt-8 h-96 flex flex-col md:flex-row">
        <div className="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center mb-4 md:mb-0">
          <div className="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center mb-4 md:mb-0">
            <div className="flex flex-col items-center">

              <img
                id="profile-img"
                src='data:image/png;base64,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'
                alt="Profile"
                className="w-40 h-100 rounded-full border-4 border-gray-300"
              />
              <br />
              <input
                type="file"
                accept="image/*"
                className="mb-2"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const imgElement = document.getElementById('profile-img');
                    imgElement.src = URL.createObjectURL(file);
                  }
                }}
              />
              <br />
              <button className='w-30 bg-gradient-to-r from-gray-800 to-gray-500 hover:from-gray-900 hover:to-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Upload Image</button>
            </div>
          </div>

        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-center pl-0 md:pl-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Username:Jithin George</h1>
          <p className="text-gray-600 mb-4">Email:</p>
          <p className="text-gray-600 mb-4">Phone:</p>
          <button
            onClick={handleLogout}
            className="w-96 bg-gradient-to-r from-blue-800 to-red-500 hover:from-red-900 hover:to-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
