import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";

function App() {
    return (
        <Router>
            <Navbar/>
            <div className='container py-4'>
                <Switch>
                    <Route exact path='/home'><Home/></Route>
                    <Route exact path='/login'><Login/></Route>
                    <Route exact path='/register'><Register/></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
