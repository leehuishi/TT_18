import Destination from "./Destination"

const Destinations = ({ destinationsSelected, onDelete }) => {
  return (
    <div>
        {destinationsSelected.map((destination) => 
        <Destination destination={destination} key={destination} onDelete={onDelete}/>)}

    </div>
  )
}

export default Destinations