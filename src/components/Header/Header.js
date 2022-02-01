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
                <div className='navList'>Naujienos</div>
                <div className='navList'>Apie Mus</div>
                <div className='navList'>Paslaugos</div>
                <div className='navList'>Prekyba</div>
                <div className='navList'>Mūsų Klientai</div>
                <div className='navList'>Įgyvendinti projektai</div>
                <div className='navList'>Kontaktai</div>
                <div className='navList'>ENG</div>

            </div>
        </div>
    </div>

  );
};

export default Header;
