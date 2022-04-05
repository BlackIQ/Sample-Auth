import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import Reset from "./components/reset";

function App() {
    return (
        <Router>
            <Navbar/>
            <div className='container py-4'>
                <Switch>
                    <Route exact path='/'><Home/></Route>
                    <Route exact path='/login'><Login/></Route>
                    <Route exact path='/register'><Register/></Route>
                    <Route exact path='/reset'><Reset/></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
