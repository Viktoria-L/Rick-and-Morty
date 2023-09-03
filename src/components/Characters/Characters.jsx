import CharacterCard from "../Card/Card";

const Characters = ({info, results}) => {
    
    return (
        <>
       
        <section className="my-3 py-6 bg-white bg-opacity-40 rounded-sm backdrop-blur-sm z-30 flex justify-center flex-wrap">
        {info ? `We found ${info.count} characters that matched your search!` : "No characters found, try again..."}
        <div className="flex justify-center flex-wrap"> 
        {results?.map((char, i) => <CharacterCard character={char} key={i} />)}
        </div>
        </section>
        </>
    )
}

export default Characters;