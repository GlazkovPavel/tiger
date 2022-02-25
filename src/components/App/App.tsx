import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Main} from "../Main/Main";
import {Auto} from "../Verstka/Auto";

function App() {
    const loggedIn: boolean = false;


    return (
    <div className="page">
        <Routes>
            <Route  path='/' element={
                <Main loggedIn={loggedIn}/>
            } />
            <Route  path='/auto' element={
                <Auto />
            } />

        </Routes>

    </div>
  );
}

export default App;
