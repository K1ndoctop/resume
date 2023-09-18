import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import axios from 'axios'

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/experience' element={<Experience/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </div>
    );
};

export default MainRoutes;