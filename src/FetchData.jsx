import React, { useEffect, useState } from "react";


function FetchData() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function grabAll() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                console.log(data);
                
                setUsers(data);
            } catch (error) {
                console.log("error", error);
            }
        }
        
        grabAll();
    }, []);
    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default FetchData;