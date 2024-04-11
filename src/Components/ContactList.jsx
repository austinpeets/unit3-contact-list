import ContactRow from './ContactRow';
import React, { useState } from 'react'
import { useEffect } from 'react';



export default function ContactList({ setSelectedContactId }) {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
                const data = await response.json();
                setContacts(data)
            } catch (error) {
                console.error(error)
            }
           
        }
        fetchContacts()
    }
    ,[setContacts]);

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
                contacts.map((contact) => {
                    return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>;
                })
            }
        </tbody>
    </table>
)}