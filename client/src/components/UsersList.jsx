import React, { useEffect, useState } from 'react';
import { apiClient } from '../lib/api-client';
import { USERDETAIL_ROUTE } from '../utils/Constants';

function UsersList() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        (async function () {
            let response = await apiClient.get(USERDETAIL_ROUTE, { withCredentials: true });
            setUsers(response.data);
        })();
    }, []);

    console.log(users);

    return (
        <tbody>
            {users && users.map((user, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td>
                        <div className="ps-3">
                            <div className="text-base font-semibold">{index + 1}</div>
                        </div>
                    </td>
                    <td scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <img className="w-10 h-10 rounded-full" src={user.url} alt="image" />
                    </td>
                    <td>
                        <div className="ps-3">
                            <div className="text-base font-semibold">{user.username}</div>
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        {user.phone}
                    </td>
                    <td className="px-6 py-4">
                        {user.email}
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" type="button" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                    </td>
                    <td>
                        <button
                            className="w-30 bg-gradient-to-r from-red-800 to-red-500 hover:from-red-900 hover:to-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Delete User
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default UsersList;