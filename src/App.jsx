import './App.css'
import ContactList from './components/ContactList';
import { useState } from 'react';



export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  console.log(selectedContactId)
  return (
    <>
    {
      selectedContactId? (<div>place holder</div>):(
        <ContactList setSelectedContactId={setSelectedContactId}/>

      )
    }
    </>
  );
}
