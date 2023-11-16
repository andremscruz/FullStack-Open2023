import { useState, useEffect } from 'react'
import personsService from './service/persons'
import Numbers from './components/Numbers'
import Form from './components/Form'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    console.log('effect')
    personsService
      .getAll()
      .then(intialPersons => setPersons(intialPersons))
  },[setPersons])
  console.log('render', persons.length, 'notes')

  const addContact = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      if(confirm(`${newName} is already in the phonebook. Replace old number with a new one?`)){
        const person = persons.find(p => p.name === newName)
        const changedPerson = {...person, number: newNumber}
        personsService
          .update(person.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id === person.id ? returnedPerson : p ))
        })
      } 
      
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        favorite: false
      }
      personsService
        .create(nameObject)
        .then(returnedPerson => setPersons(persons.concat(returnedPerson)))
    }
    setNewName('')
    setNewNumber('')
  }

  const toggleFavorite = (id) => {
    const person = persons.find(p => p.id === id)
    const changedPerson = { ...person, favorite: !person.favorite }

    personsService
      .update(id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id === id ? returnedPerson : person ))
    }) 
   }

  const deleteContact = (id) => {
    personsService
      .remove(id)
      .then(setPersons(persons.filter(p => p.id !== id)))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filter = {filter} 
        handleFilterChange={handleFilterChange}
      />
      <Form
        newName = {newName} 
        newNumber = {newNumber} 
        handleClick = {addContact}
        handleChange = {handleChange}
        handleNumberChange = {handleNumberChange}
      />
      <Numbers 
        persons = {persons} 
        filter = {filter} 
        toggleFavorite = {toggleFavorite}
        deleteContact = {deleteContact}
      />
    </div>
  )
}

export default App
