import React from 'react';
import './Footer.css'
import logo from '../images/logo.png';
import {Facebook} from '@styled-icons/boxicons-logos/Facebook';
import {Instagram} from '@styled-icons/boxicons-logos/Instagram';

const Footer = () => {
  return (
      <div className='footerFull'>
          <div className='footerContainer'>
              <div className='footerLeft'>
                    <div className='companyInfo'>
                        <div className='logoThumbnail'>
                            <img src={logo} alt="No noise logo" className='imageThumbnail'/>
                        </div>
                        <div className='companyText'>
                            NO NOISE LT, UAB
                        </div>
                    </div>
                    <div className='socialMedia'>
                        
                            <Facebook className='smIcon' />
                            <Instagram className='smIcon' />
                    </div>
              </div>
              <div className='footerRight'>
                <div className='companyContacts'>
                    <div className='headerContacts'>
                        Kontaktai
                    </div>
                    <div className='infoContacts'>
                        info@nonoise.lt<br/>
                        +370 656 822 87<br/>
                        +370 655 755 08<br/>
                    </div>
                </div>
              </div>
          </div>
          <div className='c'>
                © 2016  all rights reserved
          </div>
      </div>
  );
};

export default Footer;
