import Person from "./Person";

const Numbers = (props) => {

    const filteredPersons = props.persons.filter(person =>
        person.name.toLowerCase().includes(props.filter.toLowerCase())
      );
    return(
        <>
        <h2>Numbers</h2>
        {filteredPersons.map(person => 
        <Person key = {person.name} person = {person}/>)}
        </>
    )
}

export default Numbers