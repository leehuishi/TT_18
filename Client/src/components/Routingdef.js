import { Route, Routes } from "react-router-dom";
import Itinerary from './Itinerary';


const Routingdef = () => {
  return (
    <Routes>
    
      <Route 
        path='/'
        element = {
          <div className="container">
            <Itinerary />
          </div>
        }
      />
    
      {/* <Route 
        path="/Dashboard" 
        element={
          <div className="container2"> 
            <Header />
            <Dashboard />
          </div>
        } 
      /> */}


      <Route 
        path="/Itinerary" 
        element={
          <>
            <div className="container2">
              <Itinerary/>
            </div>
          </>
        } 
      />

      {/* <Route 
        path='/Destination' 
        element={
          <>
            <div className="container2">
              <Header /> 
              <Editclaim />
            </div>
          </>
        } 
      /> */}

      {/* <Route 
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
      /> */}
    
    </Routes>

  

  );
}

export default Routingdef;
