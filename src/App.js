import React from "react";
import './App.css';
import './css/style.css'
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';



function App() {
    return (
        <div className="App">
            <Navbar/>
                <Routes>
                    <Route path="/"  element={<Home/>}  />
                    <Route path="/services"  element={<Services/>}  />
                    <Route path="/contact"  element={<Contact/>}  />
                    <Route path="/about"  element={<About/>}  />
                </Routes>
            <Footer/>
        </div>
    );
}
export default App;
