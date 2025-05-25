import React, { useState } from 'react';
import './Header.css'; // Create a CSS file for styling
import { Link } from 'react-router-dom';
import dsalogo from './dsalogo.png'



function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <div className="header">
            <nav className="navbar">
                <div>
                    <img src={dsalogo} alt="dsalogo" />
                </div>
                <div className="navbar-logo">DSA Visualizer</div>
                <button 
                    className="menu-toggle" 
                    onClick={toggleMenu} 
                    aria-label="Toggle navigation"
                    >
                    ☰
                </button>
                {/* <ul className="navbar-links"> */}
                <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
                    <li>
                        <Link to= "/">Home</Link>
                    </li>
                    <li>
                        <Link to="DSA" >DSA Visualizations</Link>
                    </li>

                    <li>
                        <Link to="programming" >Programming Tutorials</Link>                    
                    </li>
                    
                    <li>
                        <a href="https://onecompiler.com/" target="_blank">Online Compiler</a>
                    </li>
                    <li>
                    <Link to ="login">Login</Link>
                    </li>
                    <li>
                        <Link to = "signup">Signup</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
}

export default Header;
