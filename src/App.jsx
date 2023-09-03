import { useState, useEffect } from 'react';
import Header from "./components/Header/Header";
import Filter from './components/Filter/Filter';
import Characters from './components/Characters/Characters';
import Pagination from "./components/Pagination/Pagination"
import './App.css'

function App() {
  const [characterData, setCharacterData] = useState(null);
  const [nameSearch, setNameSearch] = useState("");  
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const API_URL = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${nameSearch}&status=${status}&gender=${gender}&species=${species}`;

  //Fundera ut ett sätt att slå ihop funktionerna till en?
  // const handleChanges = (e) => {}
  
  const handleNameSearch = (e) => {
    setNameSearch(e.target.value);
  }
  const handleGenderChange = (e) => {
    if(e.target.value === 'all'){
      setGender("");
    } else {
    setGender(e.target.value);
    }
  }
  const handleSpeciesChange = (e) => {
    if(e.target.value === 'all'){
      setSpecies("");
    } else {
          setSpecies(e.target.value);
    }
  }
  const handleStatusChange = (e) => {
    if(e.target.value === 'all'){
      setStatus("");
    } else {
      setStatus(e.target.value);
    }
  }
  const pageChange = (data) => {
    console.log(data);
    setPageNumber(data.selected + 1);
    
  };
    
  useEffect(()=> {
    console.log("namnsök: " + nameSearch + "\n kön: " + gender + "\n species: " + species + "\n status: " + status);
    try {
    let getCharacters = async () => {
      let response = await fetch(API_URL);
      if (!response.ok) {
        setCharacterData(null);
        throw new Error('Network response was not ok');      
      }
      let characters = await response.json();
      setCharacterData(characters);
      console.log(characters);
      setLoading(false);
    }
    getCharacters();
  } catch (error) {
    console.error("Error", error);   
  }
  }, [nameSearch, gender, status, species, pageNumber])

  return (
    <div className='content'>      
        <Header />    
        {error !== null && <p className="Error">{error.message}</p>}
        <Filter nameSearch={nameSearch} gender={gender} status={status} species={species} handleNameSearch={handleNameSearch} handleGenderChange={handleGenderChange} handleSpeciesChange={handleSpeciesChange} handleStatusChange={handleStatusChange} />
        <Characters {...characterData} />      
        <Pagination info={characterData?.info} pageNumber={pageNumber} setPageNumber={setPageNumber} pageChange={pageChange} />
    </div>
  )
}

export default App;
