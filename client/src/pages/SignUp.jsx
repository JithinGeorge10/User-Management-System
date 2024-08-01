import React from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-4 md:mx-0">
                <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="rounded-full p-2 md:p-4 w-full"
                            type="text"
                            id="username"
                            placeholder="Choose a username"
                        />
                    </div>
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone Number
                        </label>
                        <input
                            className="rounded-full p-2 md:p-4 w-full"
                            type="tel"
                            id="phone"
                            placeholder="Enter your phone number"
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
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            className="rounded-full p-2 md:p-4 w-full"
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <button
                        className="bg-gradient-to-r from-gray-800 to-gray-500 hover:from-gray-900 hover:to-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
                        type="submit"
                    >
                        Sign Up
                    </button>
                    <div className="text-center mt-4">
                        <span className="text-gray-700 text-sm font-bold"></span>
                        <Link to='/' className="text-blue-500 hover:text-blue-700 font-bold ml-2">
                          Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;