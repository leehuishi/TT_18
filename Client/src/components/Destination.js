import { FaTimes } from 'react-icons/fa'

const Destination = ({ destination, onDelete }) => {

  return (
    <div className="task" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {destination}
        <FaTimes style={{color:'red', cursor:'pointer' }} onClick={() => onDelete(destination)} />
    </div>
  )
}

export default Destination