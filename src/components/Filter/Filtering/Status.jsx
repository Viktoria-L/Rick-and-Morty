const Status = ({status, handleStatusChange}) => {

    const statusOptions = [
        { label: 'All', value: 'all' },
        { label: 'Alive', value: 'alive' },
        { label: 'Dead', value: 'dead' },
        { label: 'Unknown', value: 'unknown' },
      ];

    return (
        <>
        <span className="">Status: </span>
        {statusOptions.map((option, i) => (
        <>
          <input
            type="radio"  
            className="mr-1"      
            name="status"
            value={option.value}
            checked={status === (option.value === 'all' ? '' : option.value)}
            onChange={handleStatusChange}
            key={i}
          />
          <label htmlFor={option.name} className="mr-1">{option.label}</label>
          </>
          ))}
     
        </>
   )
}
export default Status;