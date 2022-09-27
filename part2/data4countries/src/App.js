import { useState, useEffect } from "react"
import axios from "axios"
import Filter from "./components/Filter"
import Countries from "./components/Countries"

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => setCountries(response.data))
  }, [])

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <Filter text={'find countries'} filter={filter} onChange={handleFilter}/>
      <Countries filter={filter} countries={countries} />
    </div>
  )
}

export default App;
