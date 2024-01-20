import Itineraryeach from './Itineraryeach'

const ItineraryList = ({ itineraryall, onEdit, onDelete }) => {
  return (
    <>
      <table>
        <tr>
          {/* <th style={{width: '200px'}}>Claim ID</th> */}
          <th style={{width: '8%', paddingRight: '5px'}}>Itinerary ID</th>
          <th style={{width: '8%'}}>Country</th>
          <th style={{width: '18%'}}>Budget</th>
          <th style={{width: '20%'}}>Destination</th>
          <th style={{width: '7%'}}>Action</th>
        </tr>
        {itineraryall.map((itinerary) => (
          <Itineraryeach key={itinerary.id} itinerary={itinerary} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </table>
    </>
  )
}

export default ItineraryList
