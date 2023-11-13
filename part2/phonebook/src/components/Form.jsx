const Form = (props) => {
    return(
        <>
            <h3>Add a new contact</h3>
            <form>
                <div>
                    Name: <input value={props.newName} onChange={props.handleChange}/>
                </div>
                <div>
                    Number: <input value={props.newNumber} onChange={props.handleNumberChange}/>
                </div>
                <div>
                    <button type="submit" onClick={props.handleClick}>add</button>
                </div>
            </form>
        </>
    )
}

export default Form