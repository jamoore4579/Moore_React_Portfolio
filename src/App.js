import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/AboutPage/About'
import { Navbar, Projects, Contact, Footer } from './components'


function App() {
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/" element={<About />} exact />
            </Routes>
            <Projects />
            <Contact />
            <Footer />
        </Router> 
    );
};

export default App;