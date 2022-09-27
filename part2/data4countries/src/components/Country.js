const Country = ({ country }) => {
    const languages = []
    for (let language in country.languages) {
        languages.push(country.languages[language])
    }
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h3>languages:</h3>
            <ul>
                {languages.map(language => <li>{language}</li>)}
            </ul>
            <img src={country.flags.png} width="200" height="200" />
        </div>
    )
}

export default Country