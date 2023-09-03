const Gender = ({gender, handleGenderChange}) => {

const genderOptions = [
    { value: 'all', label: 'All' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'genderless', label: 'Genderless' },
    { value: 'unknown', label: 'Unknown' },
];

    return (
        <>
        <span className="">Gender: </span>
        {genderOptions.map((option) => (
        <label key={option.value} className="mr-1">
          <input
          className="mr-1"
            type="radio"
            name="gender"
            value={option.value}
            checked={gender === (option.value === 'all' ? '' : option.value)}
            onChange={handleGenderChange}
          />
          {option.label}
        </label>
        ))}
       <br />
       </>

    )
}

export default Gender;