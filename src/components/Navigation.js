import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <Link exact to="/" activeClassName="nav-active">Accueil</Link>
            <Link exact to="/about" activeClassName="nav-active">A propos</Link>
        </div>
    );
};

export default Navigation;