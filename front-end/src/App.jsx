import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { Link } from 'react-router';
import axios from 'axios';

export const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${backendUrl}/users`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  const deleteUser = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${backendUrl}/users/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUsers(users.filter((user) => user.id !== id));
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 p-10 bg-amber-200 rounded-2xl w-1/2 m-auto mt-10">
            <h1 className="text-2xl font-bold flex justify-center">All Users</h1>
            {users.map((user) => (
              <div key={user.id} className="p-4 border rounded bg-amber-100 shadow-md">
                <h2 className="text-xl font-bold">User ID: {user.id}</h2>
                <h3>User Name: {user.name}</h3>
                <p>User Age: {user.age}</p>
                <div className="flex gap-2 mt-4">
                  <Link
                    to={`/update/${user.id}`}
                    className="bg-amber-950 rounded-2xl hover:bg-amber-600 text-white p-3"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-600 rounded-2xl hover:bg-red-800 text-white p-3"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
