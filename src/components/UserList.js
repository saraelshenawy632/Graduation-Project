import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch(setError);
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!users.length) return <div>Loading...</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList; 