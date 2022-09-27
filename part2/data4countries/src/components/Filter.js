const Filter = ({ text, filter, onChange }) => {
    return (
        <>
            {text}  <input value={filter} onChange={onChange} />
        </>
    )
}

export default Filter