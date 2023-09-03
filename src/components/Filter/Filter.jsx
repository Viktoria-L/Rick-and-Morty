import Gender from "./Filtering/Gender";
import Species from "./Filtering/Species";
import Status from "./Filtering/Status";
import NameSearch from "./Filtering/NameSearch";

const Filter = (props) => { 

    return (
     
    <div className="filterSection m-6 text-center">
        <h3 className='font-bold'>Find your favorite Rick and Morty character</h3>
        <p className="m-2">Search by...</p>
        <NameSearch {...props} />
        <Gender {...props} />
        <Species {...props}  />
        <Status {...props}/>      
    </div>
    )
}

export default Filter;