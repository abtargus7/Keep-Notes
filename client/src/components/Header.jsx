import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <header>
            <h1>Keep Notes</h1>
            <div className="navbar">
                <Navbar />
            </div>
        </header>


    )
}

export default Header;