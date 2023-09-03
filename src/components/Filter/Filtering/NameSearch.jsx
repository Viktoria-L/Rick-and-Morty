const NameSearch = ({NameSearch, handleNameSearch}) => {

    return (
        <>
        <span className="">Name: </span>
        <input type="text" className="" placeholder="Name" onChange={handleNameSearch} />
        <br />
        </>
    )
}

export default NameSearch;