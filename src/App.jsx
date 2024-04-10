import { useState } from 'react'
import ContactList from './Components/ContactList'
import SelectedContact from './Components/SelectedContact';
import './App.css'


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  return (
    <div className="app-container">
      <ContactList setSelectedContactId={setSelectedContactId} />
      {selectedContactId && (
        <SelectedContact selectedContactId={selectedContactId} />
      )}
      {!selectedContactId && <div className="no-contact-selected">No contact selected</div>}
    </div>
  );
}

export default App
