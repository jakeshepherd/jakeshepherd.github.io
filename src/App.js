import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'

function App() {
    return (
        <div className="App">
            <Navbar>
                <a href="#home">Projects </a>
                <a href="#contact">Contact me</a>
            </Navbar>

            <header className="App-header">
                <h1>Jake Shepherd</h1>
            </header>
        </div>
    );
}

export default App;
