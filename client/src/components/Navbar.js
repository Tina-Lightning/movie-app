import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
                <a href="/" className="brand-logo">Tina's TV Time!</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav> 
    )
}

export default NavBar;
