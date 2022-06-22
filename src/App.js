import logo from './logo.svg';
import './App.css';
import { Home} from './Home'
import {Department} from './Department'
import {Employe} from './Employe'
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App container ">
      <h3 className="d-flex justify-content-center m-3">
      React js frontend
      </h3>

      <nav className="navbar navbar-expand-sm bg-light navbardark">
        <ul className="navbar-nav">
            <li className= "nav-item- m-1">
            <NavLink className ="btn btn-light btn-outline-primary" to="/Home">
              Home </NavLink></li>
              <li className= "nav-item- m-1">
            <NavLink className ="btn btn-light btn-outline-primary" to="/Department">
              Department </NavLink></li>
              <li className= "nav-item- m-1">
            <NavLink className ="btn btn-light btn-outline-primary" to="/Employe">
              Employe </NavLink></li>
              </ul>
      </nav>
      <Routes  >
        <Route path ='/Home' element ={<Home/>}/>
        <Route path ='/Department' element ={<Department/>}/>
        <Route path ='/Employe' element ={<Employe/>}/>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
