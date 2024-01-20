import Button from './Button'
import { useNavigate } from "react-router-dom";
import addDestination from './addDestination';

const Headerafter = () => {

    const navigate = useNavigate();
    const name = sessionStorage.getItem("name");
    
    //=========================================================
    // Logout
    //=========================================================
    const Logout = () => {
        sessionStorage.clear();
        navigate('/');
    };
    //=========================================================

    //=========================================================
    // Add Itinerary
    //=========================================================
    //Add Itinerary
    const addItinerary = () => {
        navigate('/Itinerary');
    };
    //=========================================================

    //=========================================================
    // Add Destination
    //=========================================================
    //Add Destination
    const addDestination = () => {
        navigate('/addDestination');
    };
    //=========================================================

    return (
        <>
            <header className='container3' style={{justifyContent: 'space-between'}}>
                <div>
                    <h2>Welcome, <span>{name}</span></h2>
                </div>
                <div>
                    <Button color='green' text='Add Itinerary' onClick2={addItinerary} />
                    <Button color='green' text='Add Destination' onClick2={addDestination} />
                    <Button color='red' text='Logout' onClick2={Logout} />
                </div>
            </header>
        </>
    )
}

export default Headerafter
