import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import SearchFilter from './components/SearchFilter'
import phoneBookService from './services/phoneBook'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() =>{
    phoneBookService
    .getAll()
    .then(initialPersons => setPersons(initialPersons))
    .catch(err => console.error(err))
  },[])

  const addPerson = (e) => {
    e.preventDefault()
    if (newNumber.length == 0 || newName.length == 0) {
      alert("Please provide a name and number.")
      return
    }
    const newPerson = {name: newName, phoneNumber: newNumber, id: persons.length + 1}
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

    
    phoneBookService.create(newPerson)
    .then(newPerson => setPersons(persons.concat(newPerson)))
    .catch(err => console.error(err))
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

  const handleDelete = (personId) => {
    return function() {
      const person = persons.filter(person => person.id === personId)[0].name
      if (window.confirm(`Are you sure you want to delete ${person}`)) {
        phoneBookService.deletePerson(personId)
      .then(response => {
        console.log("DELETE RESPONSE IS: ", response.statusText)
        let newPersons = persons.filter(person => person.id !== personId)
        setPersons(newPersons)
      })
      .catch(err => console.error("DELETE ERROR IS: ", err))
      }
    }  
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <SearchFilter filter={filter} onChange={handleFilterChange} />
      <h2>add a new person</h2>
        <PersonForm name={newName} number={newNumber} onSubmit={addPerson} onNameChange={handleNameChange} onNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
        <Persons filter={filter} persons={persons} onClick={handleDelete}/>
    </div>
  )
}

export default App

