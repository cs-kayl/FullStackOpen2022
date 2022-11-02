import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import SearchFilter from './components/SearchFilter'
import Notification from './components/Notification'
import phoneBookService from './services/phoneBook'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [notificationType, setNotificationType] = useState('')

  useEffect(() =>{
    phoneBookService
    .getAll()
    .then(initialPersons => setPersons(initialPersons))
    .catch(err => {
      console.error(err)
      setMessage('There was an error when trying to load phonebook')
      setNotificationType('error')
      clearNotification()
    })
  },[])

  const addPerson = (e) => {
    e.preventDefault()
    if (newNumber.length == 0 || newName.length == 0) {
      alert("Please provide a name and number.")
      return
    }
    let newPerson = {name: newName, phoneNumber: newNumber, id: persons.length + 1}
    for (let i = 0; i < persons.length; i++) {
      let person = persons[i]
      if (person.name.toLowerCase() === newName.toLowerCase() && person.phoneNumber === newNumber) {
        alert(`${newName} already exists in phonebook`)
        return
      } else if (person.name.toLowerCase() === newName.toLowerCase() && person.phoneNumber !== newNumber) {
        alert(`${newNumber} is already in the phonebook, replace the old number with this new one?`)
        person.phoneNumber = newNumber
        let newPersons = persons.map(person => {
          return person.name === newName ? persons[i] : person
        })
        phoneBookService.updateNumber(person)
        .then((person) => {
          setPersons(newPersons)
          setMessage(`${person.name}'s number has been updated.`)
          setNotificationType('success')
          clearNotification()
        })
        .catch(err => {
          console.error("PhoneNumber Update error: ", err)
          setMessage('There was an error when trying to update the number')
          setNotificationType('error')
          clearNotification()
        })
        return 
      }
    }

    
    phoneBookService.create(newPerson)
    .then(newPerson => {
      setPersons(persons.concat(newPerson))
      setMessage(`${newPerson.name} has been added to the phonebook!`)
      setNotificationType('success')
      clearNotification()
    })
    .catch(err => {
      console.error(err)
      setMessage('There was an error when trying to add person')
      setNotificationType('error')
      clearNotification()
    })
  }


  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const clearNotification = () => {
    setTimeout(() => {
      setMessage(null)
      setNotificationType('')
    }, 5000)
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
        setMessage('Delete operation successful!')
        setNotificationType('success')
        clearNotification()
      })
      .catch(err => {
        console.log("Delete Error: ", err)
        setMessage('Delete operation unsuccessful!')
        setNotificationType('error')
        clearNotification()
      })
      }
    }  
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Notification message={message} type={notificationType} />
        <SearchFilter filter={filter} onChange={handleFilterChange} />
      <h2>add a new person</h2>
        <PersonForm name={newName} number={newNumber} onSubmit={addPerson} onNameChange={handleNameChange} onNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
        <Persons filter={filter} persons={persons} onClick={handleDelete}/>
    </div>
  )
}

export default App

