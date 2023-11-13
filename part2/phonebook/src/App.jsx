import { useState } from 'react'
import Numbers from './components/Numbers'
import Form from './components/Form'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "7070-7070", id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
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

  const handleClick = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook`)
    } else {
      const nameObject = {
        name: newName
      }
      setPersons(persons.concat(nameObject))
    }
    setNewName('')
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter = {filter} handleFilterChange={handleFilterChange}/>
      <Form 
        newName = {newName} 
        newNumber = {newNumber} 
        handleClick = {handleClick}
        handleChange = {handleChange}
        handleNumberChange = {handleNumberChange}/>
      <Numbers persons = {persons} filter = {filter}/>
    </div>
  )
}

export default App
