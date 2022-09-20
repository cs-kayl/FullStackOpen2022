import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: `555-555-5555`}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    if (newNumber.length == 0 || newName.length == 0) {
      alert("Please provide a name and number.")
      return
    }
    const newPerson = {name: newName, phoneNumber: newNumber}
    for (let i = 0; i < persons.length; i++) {
      let person = persons[i]
      if (person.name.toLowerCase() === newName.toLowerCase()) {
        alert(`${newName} already exists in phonebook`)
        return
      } else if (person.phoneNumber === newNumber) {
        alert(`${newNumber} already exists in phonebook`)
        return 
      }
    }

    setPersons(persons.concat(newPerson))
  }


  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name} {person.phoneNumber}</p>)}
    </div>
  )
}

export default App

