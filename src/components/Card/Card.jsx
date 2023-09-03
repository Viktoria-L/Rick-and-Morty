const CharacterCard = ({character}) => {
    return (
    <div className="card hover:scale-105 flex max-w-208 relative flex-col justify-between m-6 p-4 bg-white bg-opacity-40 rounded-3xl backdrop-blur-sm z-32">
        <p className="absolute top-5 right-5 bg-green-500 p-1 text-sm rounded-lg">{character.status}</p>
        <img src={character.image} className="h-44 w-44" alt="" />
        <div className="">
            <h4 className="p-1 font-bold">{character.name}</h4>
            <p className="p-1">{character.gender} {character.species}</p>
        </div>
    </div>
    )
}

export default CharacterCard;