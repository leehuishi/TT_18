import ItineraryList from './ItineraryList';
import Button from './Button';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();

  const name = sessionStorage.getItem("name");

  //=========================================================
  // Check login (set emp_id)
  //=========================================================
  // useEffect(() => {
  //   const checklogin = () => {
  //     if (!sessionStorage.emp_id){
  //       navigate('/');
  //     }
  //   };
  //   checklogin();
  // }, []);


  // const name = sessionStorage.getItem("name");
  //=========================================================

  return (
    <>  
        <ItineraryList />
    </>
  );
}

export default Dashboard;
