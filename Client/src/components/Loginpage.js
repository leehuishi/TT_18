import Header from './Header';
import Loginform from './Loginform';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
// import bcrypt from 'bcryptjs';

const Loginpage = () => {
    sessionStorage.clear();
    const[error, setError] = useState("");
    const navigate = useNavigate();

    //=================================================================
    //Function: Fetch user detail (can work on hans laptop)
    //=================================================================
    const loginUser = async (userdetails) => {
        return fetch('http://localhost:3001/api/users/login', {
            method: 'POST',
            headers: {
                    'Content-type': 'application/json'
                    },
            body: JSON.stringify(userdetails)
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
        return { "error" : "There was a problem with the fetch operation" }
        });
    }

    //=========================================================
    //Function: Check credential (can work on hans laptop)
    //=========================================================
    const checkcrediential = async (logincred) => {
        
        //---------------------------------------------------
        //check user input 
        //---------------------------------------------------
        const username_input = logincred.username
        const password_input = logincred.password

        if(username_input === ""){
            setError("Please enter your Username");
        }
        else if(password_input === ""){
            setError("Please enter your Password");
        }
        else{
            
            //user input no issue 
            //-----------------------------------------------
            //retrieve credential
            //-----------------------------------------------
            // const password_input = logincred.password;
            // const hashPassword = bcrypt.hashSync(password_input, 10);

            // const res = await loginUser(emp_id, hashPassword);

            //-----------------------------------------------
            const userdetails = {
                "username": username_input,
                "password":password_input

            }

            const res = await loginUser(userdetails);

            const checkerror = 'error' in res;

            if(checkerror){
                //fetch error
                const error_msg = res['error'];
                setError(error_msg);
            }
            else{
                //fetch successful - check result
                const data = await res.json();
                const checkerror2 = 'error' in data;

                if(checkerror2){
                    //return error (e.g. invalid credential)
                    const error_msg = data['error'];
                    setError(error_msg);
                }
                else{
                    // console.log(data);
                    const token = data['token'];
                    sessionStorage.setItem("user_id", 1);
                    sessionStorage.setItem("name", 'Rose');
                    sessionStorage.setItem("token", token);


                    setError("");
                    navigate('/Dashboard');
                }
            }
        }
    };


    return (
        <>
            <Header titlealign='center' />
            <Loginform checklogin={checkcrediential} error={error}/>
        </>
    );
};

export default Loginpage;