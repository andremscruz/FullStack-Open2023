const Total = (props) => {
    const total = props.parts.reduce((sum, part) => 
      sum + part.exercises
    , 0)
    return(
      <h4>Total number of exercises: {total}</h4>
    )
}

export default Total