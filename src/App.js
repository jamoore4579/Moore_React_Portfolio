import React from 'react';
import Navbar from './components/Navigation/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/index';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import MyResume from './pages/Resume';
import './App.css';

function App() {
    return (

            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact />
                </Routes>
            </Router>

    );
};

export default App;