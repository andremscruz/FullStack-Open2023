import React from "react";

const Input = (props) => {
    return(
        <>
            <h3>Find country:</h3>
            <input 
            type="text" 
            placeholder="type country name" 
            onChange={props.handleChange}
            value={props.country} 
            />
        </>
    )
}

export default Input