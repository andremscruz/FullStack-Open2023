const Header = (props) => {
  return(
    <h1>Course: {props.course}</h1>
  )
  
}

const Content = (props) => {
  return(
      <ol>
        <li><Part part = {props.part1} exercise = {props.exercises1} /></li>
        <li><Part part = {props.part2} exercise = {props.exercises2} /></li>
        <li><Part part = {props.part3} exercise = {props.exercises3} /></li>
      </ol>
  )
}

const Total = (props) => {
  return(
    <h4>Total number of exercises: {props.total}</h4>
  )
} 

const Part = (props) => {
  return(
    <p>{props.part}: {props.exercise} exercises</p>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3

  return (
    <>
    <Header course = {course}/>
    <Content 
      part1 = {part1} 
      exercises1 = {exercises1}
      part2 ={part2} 
      exercises2 = {exercises2}
      part3 = {part3}
      exercises3 = {exercises3} />
    <Total total = {total}/>
    </>
  )
}

export default App
