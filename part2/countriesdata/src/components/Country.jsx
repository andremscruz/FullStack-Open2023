import React from "react";

const Country = (props) => {
    return(
        <>
            <h1>{props.name}</h1>
            <br/>
            <h3>Capital: {props.capital[0]}</h3>
            <h3>Area: {props.area} km²</h3>
            <br/>
            <p><strong>Languages:</strong></p>
            <ul>
                {Object.keys(props.languages).map(key =>
                    <li key={key}>{props.languages[key]}</li>)}
            </ul>
            <img alt="" src={props.flag} style={{width:100}} />
            

        </>
       
    )
}

export default Country