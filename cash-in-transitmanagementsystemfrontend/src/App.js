import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/LoginPage';
import Register from './components/Register';
import { UserProvider } from './components/UserContext';
import Home from './components/Home';
import UserList from './components/UserList';
import VehicleList from './components/VehicleList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import AddVehicle from './components/AddVehicle';
import EditVehicle from './components/EditVehicle';
import AddPickup from './components/AddPickup';
import AddDelivery from './components/AddDelivery';
import PickUps from './components/PickUps';
import Deliverys from './components/Deliverys';
import AddRoute from './components/AddRoute';
import AllRoutes from './components/AllRoutes';
import RouteDetails from './components/RouteDetails';
import Incidents from './components/Incidents';
import AddIncident from './components/AddIncident';
import ProtectedRoutes from './components/ProtectedRoutes';
import EditIncident from './components/EditIncident';
function App() {
  return (
    <UserProvider>
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      </link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}> </Route>
        <Route path='/Login' element={<Login/>}> </Route>
        <Route path='/Register' element={<Register/>}> </Route>
        <Route  element={<ProtectedRoutes/>}> 
        <Route path='/Home' element={<Home/>}> </Route>
        <Route path='/UserList' element={<UserList/>}> </Route>
        <Route path='/AddUser' element={<AddUser/>}> </Route> 
        
        <Route path='/EditIncident/:id' element={<EditIncident/>}> </Route>
        <Route path='/EditUser/:id' element={<EditUser/>}> </Route>
        <Route path='/VehicleList' element={<VehicleList/>}> </Route>
        <Route path='/AddVehicle' element={<AddVehicle/>}> </Route> 
        <Route path='/EditVehicle/:id' element={<EditVehicle/>}> </Route>
        <Route path='/AddPickup' element={<AddPickup/>}> </Route>
        <Route path='/AddDelivery' element={<AddDelivery/>}> </Route>
        <Route path='/Pickups' element={<PickUps/>}> </Route>
        <Route path='/Deliverys' element={<Deliverys/>}> </Route>
        
        <Route path='/AddRoute' element={<AddRoute/>}> </Route>
        <Route path='/AllRoutes' element={<AllRoutes/>}> </Route>
        
        <Route path='/RouteDetails/:id' element={<RouteDetails/>}> </Route>
        
        <Route path='/Incidents' element={<Incidents/>}> </Route>
        
        <Route path='/AddIncident' element={<AddIncident/>}> </Route>
        

        </Route>
        
        
        
      </Routes>
      </BrowserRouter>

    </div>
  </UserProvider>
  );
}

export default App;
