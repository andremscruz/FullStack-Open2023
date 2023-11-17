import axios from "axios"
import { useEffect, useState } from "react"

const Weather = (props) => {
    const [weatherData, setWeatherData] = useState(null)
    const apiKey = "eaca171c5d6bf5a2e1ba549b5a1e0c99"

    useEffect(() =>{
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${props.capital}&appid=${apiKey}`
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchWeather();

    }, [props.capital, apiKey])

    return(
        <>
            <h4>Weather in {props.capital}</h4>
            {weatherData && (
                <div>

                    <img alt="" src= {` https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
                    <p>{Number((weatherData.main.temp - 273.15).toFixed(0))} °C, {weatherData.weather[0].description} </p>
                </div>
            )}
        </>
    )
}

export default Weather