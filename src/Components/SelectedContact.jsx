import { useState } from 'react';
import { useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState([])

    useEffect(() => {
      async function fetchContact() {
          try {
              const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
              const data = await response.json();
              setContact(data)
          } catch (error) {
              console.error(error)
          }
         
      }
      fetchContact()
  }
  ,[setSelectedContactId]);
console.log(contact)
  return (
    <div>{contact.address.street}</div>
  )
}
