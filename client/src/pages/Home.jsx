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
        const isLoggedIn = await verifyJWT()
        console.log({isLoggedIn})
        if (!isLoggedIn) {
          navigate('/login')
        }
      } catch (error) {
        navigate('/login')
        console.log(error.message)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])


  if (isLoading) return <Loading/>

  return (
    <div className="text-3xl font-bold underline">
      home
    </div>
  )
}

export default Home
