import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter by name <input value={filter} onChange={handleFilterChange} />
        </div>
      <h2>add a new person</h2>
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
      {filter.length > 0 ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).
      map(person => <p key={person.id}>{person.name} {person.phoneNumber}</p>) :
      persons.map(person => <p key={person.id}>{person.name} {person.phoneNumber}</p>)}
    </div>
  )
}

export default App

