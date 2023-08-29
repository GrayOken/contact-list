import React from "react";
import FetchData from "../components"

export default function ContactList() {
    const [contacts, setContacts] = useState(FetchData)

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {

                }
            </tbody>
        </table>
    );

}