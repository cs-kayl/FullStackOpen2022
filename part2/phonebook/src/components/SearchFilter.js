const SearchFilter = ({ filter, onChange}) => {
    return (
        <div>
            filter by name <input value={filter} onChange={onChange} />
        </div>
    )
}


export default SearchFilter