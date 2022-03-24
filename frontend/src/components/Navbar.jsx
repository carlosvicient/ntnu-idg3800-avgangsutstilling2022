import { Link } from 'gatsby';
import React from 'react';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to='/bmed'>Grafisk design</Link></li>
                <li><Link to='/bixd'>Interaksjonsdesign</Link></li>
                <li><Link to='bwu'>Webutvikling</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;