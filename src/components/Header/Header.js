import React from 'react';
import './Header.css';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <div className='header'>
        <div className='container headerContainer'> 
            <div className='logo'>
                <img src={logo} alt="no noise logo" className='logoHeader' />
            </div>

            <div className='navbar'>
                <div className='navList'><a href="/news">Naujienos</a></div>
                <div className='navList'><a href="/aboutus">Apie Mus</a></div>
                <div className='navList'><a href="/services">Paslaugos</a></div>
                <div className='navList'><a href="/sales">Prekyba</a></div>
                <div className='navList'><a href="/clients">Mūsų Klientai</a></div>
                <div className='navList'><a href="/projects">Įgyvendinti projektai</a></div>
                <div className='navList'><a href="/contacts">Kontaktai</a></div>
                <div className='navList'><a href="/eng">ENG</a></div>

            </div>
        </div>
    </div>

  );
};

export default Header;
