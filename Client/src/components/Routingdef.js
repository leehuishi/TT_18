
import Loginpage from './Loginpage';
import Dashboard from './Dashboard';
import Header from './Header';
import Headerafter from './Headerafter';
import Itinerary from './Itinerary';
import Destination from './addDestination';
import EditDestination from './EditDestination';
// import Cancelclaim from './Cancelclaim';
import DeleteDestination from './DeleteDestination';
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
              <Itinerary />
            </div>
          </>
        } 
      />

      <Route 
        path='/addDestination' 
        element={
          <>
            <div className="container2">
              <Destination />
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
              {/* <Cancelclaim /> */}
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
              {/* <Deleteclaim /> */}
            </div>
          </>
        } 
      />

      <Route 
        path='/DeleteDestination/:id' 
        element={
          <>
            <div className="container2">
              <Header /> 
              <DeleteDestination />
            </div>
          </>
        } 
      />

<Route 
        path='/EditDestination/:id' 
        element={
          <>
            <div className="container2">
              <Header /> 
              <EditDestination />
            </div>
          </>
        } 
      />
    
    </Routes>

  

  );
}

export default Routingdef;
