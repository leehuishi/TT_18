
import Loginpage from './Loginpage';
import Dashboard from './Dashboard';
import Header from './Header';
import Headerafter from './Headerafter';
import Addclaim from './Addclaim';
import Editclaim from './Editclaim';
import Cancelclaim from './Cancelclaim';
import Deleteclaim from './Deleteclaim';
import { Route, Routes } from "react-router-dom";

const Routingdef = () => {
  return (
    <Routes>
    
      <Route 
        path='/'
        element = {
          <div className="container">
            <Loginpage />
          </div>
        }
      />
    
      <Route 
        path="/Dashboard" 
        element={
          <>
            <Headerafter />
            <div className="container2"> 
              <Dashboard />
            </div>
          </>
          
        } 
      />


      <Route 
        path="/Itinerary" 
        element={
          <>
            <div className="container2">
              <Header /> 
              <Addclaim />
            </div>
          </>
        } 
      />

      <Route 
        path='/Destination' 
        element={
          <>
            <div className="container2">
              <Header /> 
              <Editclaim />
            </div>
          </>
        } 
      />

      <Route 
        path='/CancelIternary/:id' 
        element={
          <>
            <div className="container2">
              <Header /> 
              <Cancelclaim />
            </div>
          </>
        } 
      />


      <Route 
        path='/DeleteIternary/:id' 
        element={
          <>
            <div className="container2">
              <Header /> 
              <Deleteclaim />
            </div>
          </>
        } 
      />
    
    </Routes>

  

  );
}

export default Routingdef;
