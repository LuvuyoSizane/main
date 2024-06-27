import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import EmployeeList from './Components/EmployeeList';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import Details from './Components/Details';
function App() {
  return (
    <div className="App">
      <h1> React JS CRUD Operations</h1>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeeList/>}> </Route>
        <Route path='/AddEmployee' element={<AddEmployee/>}> </Route>
        <Route path='/EditEmployee/:id' element={<EditEmployee/>}> </Route>
        <Route path='/Details/:id' element={<Details/>}> </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
