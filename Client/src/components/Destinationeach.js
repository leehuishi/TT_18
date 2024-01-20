import { useState, useEffect} from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"

const Destinationeach = ({ destination }) => {
  const navigate = useNavigate();

  
  // Edit Destination
  const editDestination = async () => {
    navigate(`/Destination`);
}

// Delete Destination
const DeleteDestination = async (destination) => {
    navigate(`/DeleteDestination/${destination}`);
}
  return (
    <tr>
        <td style={{paddingRight: '5px'}}>{destination}</td>
        <td>
          <FaEdit style={{cursor:'pointer'}} onClick={() => editDestination(destination)}/>
          &nbsp;&nbsp;
          <FaTimes style={{color: 'red', cursor:'pointer'}} onClick={() => DeleteDestination(destination)} />
        </td>
    </tr>
    
  )
}

export default Destinationeach;
