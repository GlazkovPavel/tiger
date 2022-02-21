import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Main} from "../Main/Main";

function App() {
    const loggedIn: boolean = false;


    return (
    <div className="page">
        <Routes>
            <Route  path='/' element={
                <Main loggedIn={loggedIn}/>
            } />


        </Routes>

    </div>
  );
}

export default App;
