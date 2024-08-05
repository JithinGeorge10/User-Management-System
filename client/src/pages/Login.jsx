import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import video from '../assets/EmployeeManagement.mp4';
import Loading from '../components/LoadingPage';


function Login() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      (async function () {
        try {
          const isLoggedIn = await verifyJWT()
          console.log({isLoggedIn})
          if (isLoggedIn) {
            navigate('/home')
          }
        } catch (error) {
          navigate('/home')
          console.log(error.message)
        } finally {
          setIsLoading(false)
        }
      })()
    }, [])
    if (isLoading) return <Loading/>
    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-transparent p-4 md:p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 relative">
                <h2 className="text-center mt-4 text-2xl font-bold mb-4">Login</h2>
                <div className="flex justify-center mb-4">
                    <video
                        autoPlay
                        loop
                        muted
                        className="w-48 h-48 object-cover rounded-lg"
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="rounded-full p-2 md:p-4 w-full"
                            type="email"
                            id="email"
                            placeholder="eg: name@email.com"

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="rounded-full p-2 md:p-4 w-full"
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        className="bg-gradient-to-r from-gray-800 to-gray-500 hover:from-gray-900 hover:to-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
                        type="submit"
                    >
                        Login
                    </button>

                    <div className="text-center mt-4">
                        <span className="text-gray-700 text-sm font-bold">Not a User?</span>
                        <Link to='/signup' className="text-blue-500 hover:text-blue-700 font-bold ml-2">
                            Sign up
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Login;