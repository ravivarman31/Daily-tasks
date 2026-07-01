import React from 'react'
import {useEffect ,useState } from 'react'


const UserSearch = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/users")
     .then((response) => response.json())
     .then((data) => setUsers(data))
     .catch((error) => console.log(error));

    },[] );

     const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>

        

        <input type= "text" placeholder="search User" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <ul>
            {filteredUsers.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}




        </ul>
      
    </div>
  )
}

export default UserSearch
