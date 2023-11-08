const Header = (props) => {
  return(
    <h1>Course: {props.course}</h1>
  )
  
}

const Content = (props) => {
  return(
      <ol>
        <li><Part name = {props.parts[0].name} exercises = {props.parts[0].exercises} /></li>
        <li><Part name = {props.parts[1].name} exercises = {props.parts[1].exercises} /></li>
        <li><Part name = {props.parts[2].name} exercises = {props.parts[2].exercises} /></li>
      </ol>
  )
}

const Total = (props) => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return(
    <h4>Total number of exercises: {total}</h4>
  )
} 

const Part = (props) => {
  return(
    <p>{props.name}: {props.exercises} exercises</p>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (
    <>
    <Header course = {course.name}/>
    <Content parts = {course.parts} />
    <Total parts = {course.parts}/>
    </>
  )
}

export default App
