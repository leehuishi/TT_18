import { useState, useEffect} from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"

const Destinationeach = ({ destination }) => {
  const navigate = useNavigate();

  
  // Edit Destination
  const editDestination = async (destinationid) => {
    navigate(`/EditDestination/${destinationid}`);
}

// Delete Destination
const DeleteDestination = async (destinationid) => {
    navigate(`/DeleteDestination/${destinationid}`);
}
  return (
    <tr>
        <td style={{paddingRight: '5px'}}>{destination.name}</td>
        <td>
          <FaEdit style={{cursor:'pointer'}} onClick={() => editDestination(destination.id)}/>
          &nbsp;&nbsp;
          <FaTimes style={{color: 'red', cursor:'pointer'}} onClick={() => DeleteDestination(destination.id)} />
        </td>
    </tr>
    
  )
}

export default Destinationeach;
