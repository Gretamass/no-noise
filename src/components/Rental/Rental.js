import React from 'react';
import './Rental.css';
import Service from '../Service/Service';
import { rentalData  } from '../Service/data';

const Design = () => {
  return (
    <div className='services'>

        <div className='containerTitle'>Servisas</div>
        <Service data={rentalData} />

        
    </div>
  );
};

export default Design;
