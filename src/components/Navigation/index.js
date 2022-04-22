import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        Jason A Moore <i className="fa-solid fa-desktop"></i>'
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;