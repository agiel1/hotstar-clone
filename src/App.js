import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Header from './components/Header';
import './App.css';
import Detail from "./components/Detail";
import Home from "./components/Home";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
            <Route exact path= '/' element={<Login/>}/>  
            <Route path="/home" element={<Home/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
