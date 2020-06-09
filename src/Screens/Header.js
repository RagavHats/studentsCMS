import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeScreen from  "./HomeScreen";
import CreateScreen from  "./CreateScreen";
import UpdateScreen from  "./UpdateStudent";

const NavBar = () =>{
    return (
        
<Router>
    <nav className="navbar navbar-expand navbar-dark bg-info">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand pb-2" >Students CMS</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav align-self-end" id="nav">
                <li className="nav-item">
                    <Link to="/"  className="nav-link text-white" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/create"  className="nav-link text-white" >Create</Link>
                </li>
                <li className="nav-item">
                    <Link to="/search"  className="nav-link text-white" >Search</Link>
                </li>
                <li className="nav-item">
                    <Link to="/update"  className="nav-link text-white" >update</Link>
                </li>
            </ul>
           
        </div>
        </div>
    </nav>
    
    <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/create' component={CreateScreen} />
        <Route exact path='/update/:userId' component={UpdateScreen} />
    </Switch>
</Router>

    );
}

export default NavBar;