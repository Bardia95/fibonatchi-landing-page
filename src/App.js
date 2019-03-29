import React from 'react';
import EmailForm from './EmailForm';
import logo from './bloglogo.png';
import './App.css';


const App = () => {
    return (
        <div className="flex-container">
            <div className="card">
                <h1 className="title">Fibonatchi</h1>
                <p className="description">Mental Models you'll remember forever</p>
            </div>
                <EmailForm />
                <p className="made-with"><a className="twitter-link" href="https://twitter.com/thepericulum">@ThePericulum</a></p>
        </div> 
        
    );
}

export default App;
