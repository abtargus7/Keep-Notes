import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Keep Notes</h1>
            <div className='navbar'>
                <ul>
                    <li>
                      <Link to="/">Home</Link> 
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>    
                </ul>
            </div>
        </header>


    )
}

export default Header;