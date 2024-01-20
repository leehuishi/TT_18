import { useState, useEffect} from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Destinationeach from './Destinationeach'

const Itineraryeach = ({ itinerary, onEdit, onDelete }) => {
  return (
    <tr>
        <td style={{paddingRight: '5px'}}>{itinerary.id}</td>
        <td style={{paddingRight: '5px'}}>{itinerary.country_name}</td>
        <td style={{paddingRight: '5px'}}>{itinerary.budget}</td>
        <td style={{paddingRight: '5px'}}>
          <table>
          {/* {itinerary.destination} */}
            {itinerary.destination.map((destination) => (
              <Destinationeach key={destination.id} destination={destination} />
            ))}
          </table>
        </td>
        <td>
          <FaEdit style={{cursor:'pointer'}} onClick={() => onEdit(itinerary.id)}/>
          &nbsp;&nbsp;
          <FaTimes style={{color: 'red', cursor:'pointer'}} onClick={() => onDelete(itinerary.id)} />
        </td>
    </tr>
    
  )
}

export default Itineraryeach;
