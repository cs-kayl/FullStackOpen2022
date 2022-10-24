import Button from "./Button"

const Persons = ({ filter, persons, onClick }) => {
    return (
        <>
            {filter.length > 0 ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).
            map(person => <p key={person.id}>{person.name} {person.phoneNumber} <Button text='delete' onClick={onClick(person.id)} /></p>) :
            persons.map(person => <p key={person.id}>{person.name} {person.phoneNumber} <Button text='delete' onClick={onClick(person.id)} /></p>)}
        </>
    )
}


export default Persons