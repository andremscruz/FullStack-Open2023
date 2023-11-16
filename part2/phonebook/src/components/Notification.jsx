const Notification = ({ message }) => {
    const styles = {
        color: "red"
    }
    if (message === null) {
      return null
      
    }

    
  
    return (
      <div style = {styles}>
        {message}
      </div>
    )
}

export default Notification