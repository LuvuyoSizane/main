import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
    <Router>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/Create' element={<Create/> }/>
        <Route path='/Edit' element={<Edit/> }/>

      </Routes>
    </Router>
    
    
    </div>
  );
}

export default App;
