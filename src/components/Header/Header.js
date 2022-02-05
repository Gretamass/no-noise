import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

const Header = () => {
  return (
    <div className='header'>
        <div className='container headerContainer'> 
            <div className='logo'>
                <Link to="/"><img src={logo} alt="no noise logo" className='logoHeader' /></Link>
            </div>

            <div className='navbar'>
                <div className='navList'><Link to="/news">Naujienos</Link></div>
                <div className='navList'><Link to="/aboutus">Apie Mus</Link></div>
                <div className='navList'><Link to="/services">Paslaugos</Link></div>
                <div className='navList'><Link to="/sales">Prekyba</Link></div>
                <div className='navList'><Link to="/clients">Mūsų Klientai</Link></div>
                <div className='navList'><Link to="/projects">Įgyvendinti projektai</Link></div>
                <div className='navList'><Link to="/contacts">Kontaktai</Link></div>
                <div className='navList'><Link to="/eng">ENG</Link></div>

            </div>
        </div>
    </div>

  );
};

export default Header;
