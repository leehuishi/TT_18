import { useState, useEffect } from 'react'
import ItineraryList2 from './ItineraryList2'
import { useNavigate } from "react-router-dom"

const ItineraryList = () => {
    const name = sessionStorage.getItem("name");
    const [itineraryall, setItineraryall] = useState([]);
    const[error, setError] = useState("");
    const navigate = useNavigate();

    const user_id = sessionStorage.getItem('user_id');

    //=========================================================
    // Get Itinerary
    //=========================================================
    // Fetch Itinerary
    // const fetchClaims = async () => {
    //     return fetch(`http://127.0.0.1:5000/claims?emp_id=${emp_id}`)
    //     .then(res => {
    //         if (!res.ok) {
    //             return { "error" : "Network response was not ok" }
    //         } 
    //         else {
    //             return res
    //         }
    //     })
    //     .catch(error => {
    //         return { "error" : "There is a technical issue. Please kindly try again later." } //There was a problem with the fetch operation
    //     });
    // }
    
    useEffect(() => {
        const getItinerary = async () => {
            // const fetchedclaim = await fetchClaims();

            // const checkerror = 'error' in fetchedclaim;
            // if(checkerror){
            //     const error_msg = fetchedclaim['error'];
            //     setError(error_msg);
            // }
            // else{
            //     const claimsFromServer = await fetchedclaim.json();
                
            //     const checkerror2 = 'error' in claimsFromServer;
            //     if(checkerror2){
            //       const error_msg = claimsFromServer['error'];
            //       setError(error_msg);
            //     }
            //     else{
            //         setClaims(claimsFromServer);
            //     }
            // }
            const list = [
                {  
                    'id': 1,
                    'country_name':'Singapore',
                    'budget':500,
                    'destination':['Marina Bay Sands', 'Gardens by the Bay']
                },
                {  
                    'id': 2,
                    'country_name':'Singapore',
                    'budget':800,
                    'destination':['Sentosa Island','Universal Studios Singapore']
                }

            ]
            setItineraryall(list);
        }
        getItinerary();
    }, []);


    // // Cancel Task
    // const cancelClaim = async (claim_id) => {
    //     navigate(`/Cancelclaim/${claim_id}`);
    // }


    // // Edit claim
    // const editClaim = async (claim_id) => {
    //     navigate(`/Editclaim/${claim_id}`);
    // }

    // // Delete claim
    // const deleteClaim = async (claim_id) => {
    //     navigate(`/Deleteclaim/${claim_id}`);
    // }

    // Edit Itinerary
    const editItinerary = async () => {
        navigate(`/Itinerary`);
    }

    // Delete Itinerary
    const DeleteIternary = async (i_id) => {
        navigate(`/DeleteIternary/${i_id}`);
    }

    return (
        <>
            {(error !== "") ? (<div className="error" style={{paddingBottom: 20}}>{error}</div>) : ""}    
            {itineraryall.length > 0 && error === "" ? <ItineraryList2 itineraryall={itineraryall} onEdit={editItinerary} onDelete={DeleteIternary} />: ('No Iternary To Show')}
        </>
    )
}

export default ItineraryList;
