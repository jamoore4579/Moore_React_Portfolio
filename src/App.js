import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navigation/Navbar'
import { About } from './components/About/About'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Contact } from './components/Contact/Contact'
import { Resume } from './components/Resume/Resume'
import { Footer } from './components/Footer/Footer'

function App() {

        return (
            <React.Fragment>
                <Router>
                <GlobalStyle />
                <Navbar />
                    <Routes>
                        <Route path="/" exact element={<About />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                    <Footer />
                </Router>
            </React.Fragment>
        );  
};

export default App;