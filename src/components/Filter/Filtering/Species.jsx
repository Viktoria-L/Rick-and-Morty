const Species = ({ species, handleSpeciesChange}) => {

    return (
        <>
        <label htmlFor="species">Species: </label>
        <select id="speciesDropdown" value={species} name="species" onChange={handleSpeciesChange}>
         <option value="all">All</option>
         <option value="human">Human</option>
         <option value="alien">Alien</option>
         <option value="humanoid">Humanoid</option>
         <option value="mythological">Mythological</option>
         <option value="animal">Animal</option>
         <option value="robot">Robot</option>   
       </select>
       <br />
       </>
    )
}

export default Species;