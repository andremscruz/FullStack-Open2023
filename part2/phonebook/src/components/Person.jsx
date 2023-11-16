import fav from "../images/filled-star.png"
import notFav from "../images/empty-star.png"
import deleteContact from "../images/delete.png"

const Person = (props) => {
    const styles = {
        backgroundColor: "white",
        border: "none",
        cursor: "pointer"
        
    }
    return(
        <h3>{props.person.name}: {props.person.number}
            
            <button 
                style={styles} 
                onClick={() => props.handleClick(props.person.id)}>
            <img alt="" src={props.person.favorite ? fav : notFav}/>
            </button>
            <button
                style={styles}
                onClick={() => props.handleDeleteClick(props.person.id)}>
                <img alt="" src={deleteContact} />
            </button>
            
        </h3>
    )
    
}

export default Person