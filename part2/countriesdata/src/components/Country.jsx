import React from "react";
import Weather from "./Weather"

const Country = (props) => {

    const styles = {
        display: "flex",
        alignItems: "center",
        marginTop: 30
    }
    return(
        <> 
            <div style={styles}>
                <h1>{props.name}</h1>
                <img alt="" src={props.flag} style={{width:100, marginLeft:125}} />
            </div>
            <div style={styles}>
                <div>
                    <h4>Area: {props.area} km²</h4>
                    <h3>Capital: {props.capital[0]}</h3>
                    <Weather capital = {props.capital}/>
                </div>
                <div style={{ marginLeft:125}}>
                    <h5><strong>Languages:</strong></h5>
                    <ul>
                        {Object.keys(props.languages).map(key =>
                            <li key={key}>{props.languages[key]}</li>)}
                    </ul>
                </div>
            </div>
            
            
            
            

        </>
       
    )
}

export default Country