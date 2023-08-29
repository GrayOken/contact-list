import React from "react";

export default function ContactRow({ contact, setSelectedContactId }) {
    return (
        <table>
            <thead>
                <tr onClick={() => { setSelectedContactId(contact.id) }}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                </tr>
            </thead>
        </table>
    );
}