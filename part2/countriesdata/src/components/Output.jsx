import React from "react";
import Country from "./Country";

const Output = (props) => {
    if(props.filter.length === 0){
        return(
            null
        )
    }
    else if(props.filteredCountries.length > 10){
        return(
            <p>Too many matches, be more specific</p>
        )
    }    
    else if(props.filteredCountries.length > 1){
        return(
            props.filteredCountries.map(country =>
            <p key={country.name.common}>{country.name.common}</p>
            )
        )   
    }
    else{
        return(
            props.filteredCountries.map(country =>
                <Country
                    languages = {country.languages}
                    flag = {country.flags.png} 
                    name = {country.name.common}
                    capital = {country.capital}
                    area = {country.area}/>
                )
        )
    }
}

export default Output