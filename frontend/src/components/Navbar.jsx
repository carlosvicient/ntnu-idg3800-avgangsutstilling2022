import React from 'react';
import { Link } from 'gatsby';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to='/bmed'>Grafisk design</Link></li>
                <li><Link to='/bixd'>Interaksjonsdesign</Link></li>
                <li><Link to='/bwu'>Webutvikling</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;