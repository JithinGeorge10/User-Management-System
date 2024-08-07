import React, { useEffect, useState } from 'react'
import UsersTable from '../components/UsersTable'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/LoadingPage'
import { verifyAdminJWT } from '../utils/apiCall'

function AdminHome() {
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        (async function () {
            try {
                const isLoggedIn = await verifyAdminJWT()
                if (!isLoggedIn) {
                    navigate('/admin')
                }
            } catch (error) {
                navigate('/admin')
            } finally {
                setIsLoading(false)
            }
        })()
    }, [])
    if (isLoading) return <Loading />
    return (
        <>
            <nav className=" bg-gray-600 p-4 shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    <h1 className="text-white text-2xl font-bold">Admin Home</h1>
                </div>
            </nav>

            <UsersTable />

        </>
    )
}

export default AdminHome
