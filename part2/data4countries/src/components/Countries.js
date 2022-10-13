import { useState } from "react"
import Country from "./Country"

const Countries = ({ filter, countries }) => {
    const [show, setShow] = useState(false)
    const [country, setCountry] = useState({})
    const numCountries = countries.filter(country => country.name.official.toLowerCase().includes(filter.toLowerCase())).length
    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
    
    const handleClick = (e) => {
        const countryName = e.target.parentElement.textContent.toLowerCase().split(" ")[0]
        console.log(countryName)
        const selectedCountry = countries.filter(country => country.name.common.toLowerCase() === countryName)[0]
        setCountry(selectedCountry)
        setShow(true)
    }

    if (numCountries > 10) {
        return filter.length > 0 ? <p>Too many matches, please be more specific</p> : null
    } else if (numCountries <= 10 && numCountries > 1) {
        return (show ? <Country country={country} /> : filteredCountries.map(country => {
            return (
            <div>
                <p>{country.name.common} <button onClick={handleClick}>show</button></p>
            </div>
            )}
        )
    )
    } else if ( numCountries === 1) {
        return <Country country={filteredCountries[0]} />
    }
}

export default Countries