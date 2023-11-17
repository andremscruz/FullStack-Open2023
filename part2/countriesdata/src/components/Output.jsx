import React, { useState} from "react";
import Country from "./Country";

const Output = (props) => {

    const [selectedCountry, setSelectedCountry] = useState(null)

    const handleClick = (country) => {
        setSelectedCountry(country)
    }

    if(props.filter.length === 0 ||props.filteredCountries.length === 0){
        return(
            <p>No matches</p>
        )
    }
    else if(props.filteredCountries.length > 10){
        return(
            <p>Too many matches, be more specific</p>
        )
    }    
    else if(props.filteredCountries.length > 1){
        return(
            <>
                {props.filteredCountries.map((country) => (
                    <p key={country.name.common}>
                        {country.name.common}
                        <button onClick={() => handleClick(country)}>Show details</button>
                    </p>
                ))}
                {selectedCountry && 
                selectedCountry.name.common.toLowerCase().includes(
                    props.filter.toLowerCase()) && (
                    <Country
                        languages={selectedCountry.languages}
                        flag={selectedCountry.flags.png}
                        name={selectedCountry.name.common}
                        capital={selectedCountry.capital}
                        area={selectedCountry.area}
                    />
                )}
            </>
        )   
    }
    else{
        return(
            props.filteredCountries.map(country =>
                
                <Country
                    key = {country.name.common}
                    languages = {country.languages}
                    flag = {country.flags.png} 
                    name = {country.name.common}
                    capital = {country.capital}
                    area = {country.area}
                />
            )
        )
    }
}

export default Output