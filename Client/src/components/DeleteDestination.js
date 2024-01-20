import Button from './Button';
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const DeleteDestination = () => {
    const navigate = useNavigate();
    const params = useParams();
    const[error, setError] = useState("");

    const token = sessionStorage.getItem('token');

    //=========================================================
    // Check login (set emp_id and claim_id)
    //=========================================================
    // useEffect(() => {
    //     const checklogin = () => {
    //         if (!sessionStorage.emp_id){
    //           navigate('/');
    //         }
    //         else if(params.id === ""){
    //             navigate('/Home');
    //         }
    //     };
    //     checklogin();
    // }, []);

    //=========================================================
    // Cancel claim (to update status to cancelled)
    //=========================================================
    async function deleteDestinationApi() {
        return fetch(`http://127.0.0.1:5000/claims?emp_id=${params.id}`, {
            method: 'DELETE',
            headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer '+ token, 
                    },
        })
        .then(res => {
            if (!res.ok) {
                return { "error" : "Network response was not ok" }
            } 
            else {
                return res
            }
        })
        .catch(error => {
            return { "error" : "There is a technical issue. Please kindly try again later." } //There was a problem with the fetch operation
        });


    }

    const deleteDestination = async () => {
        const deleteddetination = await deleteDestinationApi();
        const checkdelete = 'error' in deleteddetination;
        if(checkdelete){
            setError(deleteddetination['error']);
        }
        else{
            const deletedresFromServer = await deleteddetination.json();
            
            const checkdelete2 = 'error' in deletedresFromServer;
            if(checkdelete2){
              setError(deletedresFromServer['error']);
            }
            else{
                navigate(`/Dashboard`);
            }
        }
    }

    //=========================================================
    // Run Cancel claim
    //=========================================================    
    const canceldeleteDestination = async () => {
        navigate(`/Dashboard`);
    }

    //=============================================================================================

    return (
        <>
            {(error !== "") ? (<div className="error" style={{paddingBottom: '20px' }}>{error}</div>) : ""}

            <header className='header' style={{justifyContent: 'center'}}>
                <h1>Confirm Delete?</h1>
            </header>

            <p className='header' style={{color: 'red', justifyContent: 'center'}}>{"\n"}Please note that deleted record cannot be retrieved back.</p>

            <div className='header' style={{justifyContent: 'center'}}>
                <Button color='green' text='Yes' onClick2={deleteDestination}/>
                <Button color='red' text='No' onClick2={canceldeleteDestination} />
            </div>
           
        </>
    )
}

export default DeleteDestination;
