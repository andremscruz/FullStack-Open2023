import { useState } from 'react'

const StatisticLine = (props) => {
  return(
    <tr>
        <td>{props.text}:</td>
        <td>{props.data}</td>
    </tr>
  )
}
const Statistics = (props) => {
  return(
    <table>
      <tbody>
      <StatisticLine text = "Good" data = {props.good}/>  
      <StatisticLine text = "Neutral" data = {props.neutral}/>  
      <StatisticLine text = "Bad" data = {props.bad}/>  
      <StatisticLine text = "Total votes" data = {props.total}/>  
      <StatisticLine text = "Average score" data = {props.avg/props.total}/>   
      <StatisticLine text = "Positive feedback" data = {`${props.percentage} %`}/>
      </tbody>
    </table>
  )
}
const Button = (props) => {
  return(
    <button onClick = {props.handleClick} >{props.option}</button>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const total = good + neutral + bad
  const avg = good - bad
  const percentage = good/total*100

  const handleGoodClick = () => {
    setGood(prevGood => prevGood + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(prevNeutral => prevNeutral + 1)
  }
  const handleBadClick = () => {
    setBad(prevBad => prevBad + 1)
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button option = "good" handleClick = {handleGoodClick} />
      <Button option = "neutral" handleClick = {handleNeutralClick} />
      <Button option = "bad" handleClick = {handleBadClick} />
      <h3>Statistics</h3>
      {total !== 0 ?
      <Statistics
        good = {good} 
        neutral = {neutral} 
        bad = {bad}
        total = {total}
        avg = {avg}
        percentage = {percentage} 
      /> : <p>No feedback given</p>}
    </div>
  )
}

export default App
