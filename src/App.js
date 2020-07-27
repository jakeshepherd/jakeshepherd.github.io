import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'

function App() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Projects</Navbar.Brand>
            </Navbar>
            <header className="App-header">
                <h1>Jake Shepherd</h1>
            </header>
        </div>
    );
}

export default App;
