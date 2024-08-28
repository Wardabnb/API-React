import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUsers(response.data);
      } catch (error) {
        console.error(error);
        // Handle errors gracefully
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      {
        <ul>
          {listOfUsers.map((user) => (
            <li key={user.id}>
              <div>
                <h1> {user.name}</h1>
                <h3>{user.username}</h3>
                <p>{user.email}</p>
                <p>{user.address.city}</p>
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
