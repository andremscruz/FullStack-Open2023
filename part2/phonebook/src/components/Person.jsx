import fav from "../images/filled-star.png"
import notFav from "../images/empty-star.png"
import deleteContact from "../images/delete.png"

const Person = (props) => {
    const stylesB = {
        backgroundColor: "white",
        border: "none",
        cursor: "pointer"
        
    }
    const stylesN = {
        marginLeft: "10px"
    }
    return(
        <h3 style={stylesN}>{props.person.name}: {props.person.number}
            
            <button 
                style={stylesB} 
                onClick={() => props.handleClick(props.person.id)}>
            <img alt="" src={props.person.favorite ? fav : notFav}/>
            </button>
            <button
                style={stylesB}
                onClick={() => props.handleDeleteClick(props.person.id)}>
                <img alt="" src={deleteContact} />
            </button>
            
        </h3>
    )
    
}

export default Person