import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import countryService from "./services/countries"

const App = () => {

  const [countryList, setCountryList] = useState([])

  const [country, setCountry] = useState("")

  const filteredCountries = countryList.filter(c => 
    c.name.common.toLowerCase().includes(country.toLowerCase()))

  useEffect(() => {
    countryService
      .getAll()
      .then(countries => setCountryList(countries))
      .catch(error => console.error("Error fetching countries:", error));
  },[])

  const handleChange = (event) => {
    setCountry(event.target.value)
  }
  
  return(
    <>
      <Input handleChange = {handleChange} country = {country} />
      <Output filteredCountries = {filteredCountries} filter = {country}/>
    </>
  )
}

export default App