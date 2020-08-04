import React from 'react';
import './CSS/App.css';
import Nav from "./Pages/Nav";
import Footer from "./Pages/Footer";
import {Switch, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

import Sidebar from "./Pages/Sidebar";

function App() {
    return (
        <div id={"App"}>
            <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} right/>
            <Nav id={"page-wrap"}/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/projects" component={Projects}/>
                <Route path={"/contact"} component={Contact}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
