import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (e) => {
    e.preventDefault()
    persons.filter(person => person.name.toLowerCase() == newName.toLowerCase()).length > 0 ? 
            alert(`${newName} is already added to the phonebook`) : 
            setPersons(persons.concat({name: newName}))
  }


  const handleNameChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App

