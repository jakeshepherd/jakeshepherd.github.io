import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './CSS/App.css';

import Contact from "./Pages/Contact";
import CV from "./Pages/CV";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Nav from "./Pages/Nav";
import Projects from "./Pages/Projects";

function App() {
    return (
        <div id={"App"}>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/cv" component={CV}/>
                <Route path={"/contact"} component={Contact}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
