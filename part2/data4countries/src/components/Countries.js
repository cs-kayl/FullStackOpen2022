import Country from "./Country"

const Countries = ({ filter, countries }) => {
    const numCountries = countries.filter(country => country.name.official.toLowerCase().includes(filter.toLowerCase())).length
    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
    console.log("FILTERED COUNTRIES:", filteredCountries)

    if (numCountries > 10) {
        return filter.length > 0 ? <p>Too many matches, please be more specific</p> : null
    } else if (numCountries <= 10 && numCountries > 1) {
        return filteredCountries.map(country => <p>{country.name.common}</p>)
    } else if ( numCountries === 1) {
        return <Country country={filteredCountries[0]} />
    }
}

export default Countries