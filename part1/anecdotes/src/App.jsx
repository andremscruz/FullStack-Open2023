import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(Math.floor(Math.random() * 8))

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  const copy = [...votes]

  const mostVoted = copy.indexOf(Math.max(...copy))

  const handleClick = () => {
    let random = Math.floor(Math.random() * 8)
    while (random === selected){
      random = Math.floor(Math.random() * 8)
    }
    setSelected(random)
  }
  
  const handleVote = () => {
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      <p>This anecdote has {copy[selected]} votes</p>
      <br/>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <br/>
      <h2>Anectode with most votes</h2>
      <p>{`${anecdotes[mostVoted]} has ${copy[mostVoted]} votes`}</p>
    </div>
  )
}

export default App