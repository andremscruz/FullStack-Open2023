/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import personsService from './service/persons'
import Numbers from './components/Numbers'
import Form from './components/Form'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState()

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
    personsService
      .getAll()
      .then(intialPersons => setPersons(intialPersons))
  },[])

  

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
          .then(setErrorMessage
            `Contact number was changed successfully`
          )
          .catch(error => {
            setErrorMessage(`Name must have at least 3 characteres and number at least 8`)
          })
          setTimeout(() => {
            setErrorMessage(null)
          },5000)
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
        .then(setErrorMessage
          ` Contact number was added successfully`
        )
        .catch(error => {
          setErrorMessage(`Name must have at least 3 characteres and number at least 8`)
        })
        setTimeout(() => {
          setErrorMessage(null)
        },5000)
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
        setPersons(persons.map(p => p.id === id ? returnedPerson : p ))
    })
    .then( person.favorite === false  ? 
      setErrorMessage('Contact was favorited successfully') :
      setErrorMessage('Contact was unfavorited successfully'))
    .catch(error => {
      setErrorMessage('Contact information was previously removed from server'
      )
      setPersons(persons.filter(p => p.id !== id))
    })
    setTimeout(() => {
      setErrorMessage(null)
    },5000)
   }

  const deleteContact = (id) => {
    personsService
      .remove(id)
      .then(setPersons(persons.filter(p => p.id !== id)))
      .then(setErrorMessage
        `Contact was deleted successfully`
      )
      .catch(error => {
        setErrorMessage('Contact information was previously removed from server'
        )
      })
      setTimeout(() => {
        setErrorMessage(null)
      },5000)
      setPersons(persons.filter(p => p.id !== id))  
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
      <Notification message={errorMessage}/>
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
