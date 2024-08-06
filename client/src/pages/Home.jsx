import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyJWT } from '../utils/apiCall'
import Loading from '../components/LoadingPage.jsx'
import Navbar from '../components/Navbar.jsx'
import { toast } from 'sonner'
import { useSelector } from 'react-redux';

function Home() {
  const userDetails = useSelector((state) => state.user.userDetails);
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
      alert('Are you sure?')
      document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      sessionStorage.clear();
      localStorage.clear();
      toast.success("Logged out successfully!", {
        autoClose: 3000,
      });
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
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Name:{userDetails.username}</h1>
          <p className="text-gray-600 mb-4">Email:{userDetails.email}</p>
          <p className="text-gray-600 mb-4">Phone:{userDetails.phone}</p>
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
