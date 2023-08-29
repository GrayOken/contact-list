//when we click a link, it toggles the view with the information we did not render
//within app were gonna make a conditional statememnt that shows what we want to show
//selectedContact should iterate over the array

import React, { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId }) {
    const [contact, setContact] = useState([]);
    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/${selectedContactId}");
                const data = await response.json();
                setContact(data)

            } catch (error) {
                console.error(error);
            }
        }
        fetchContact()
    }, []);
    console.log(contact)
    return (
        <tr onClick={() => { setSelectedContactId(null) }}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}