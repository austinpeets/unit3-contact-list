import { useState } from 'react'
import ContactList from './Components/ContactList'
import SelectedContact from './Components/SelectedContact';
import './App.css'


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  console.log(selectedContactId)
  return (
    <div>  
        <ContactList setSelectedContactId={setSelectedContactId} />
        <SelectedContact contact={selectedContactId} />
    </div>
  );
}

export default App
