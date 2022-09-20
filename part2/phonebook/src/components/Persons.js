const Persons = ({ filter, persons }) => {
    return (
        <>
            {filter.length > 0 ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).
            map(person => <p key={person.id}>{person.name} {person.phoneNumber}</p>) :
            persons.map(person => <p key={person.id}>{person.name} {person.phoneNumber}</p>)}
        </>
    )
}


export default Persons