import React from 'react';
import './Services.css';
import Service from '../Service/Service';
import { designData, salesData, rentalData  } from '../Service/data';

const Design = () => {
  return (
    <div className='services'>
        <div className='containerTitle'>Servisas</div>
        <Service data={designData} />

        <div className='containerTitle'>Servisas</div>
        <Service data={salesData} />

        <div className='containerTitle'>Servisas</div>
        <Service data={rentalData} />

        
    </div>
  );
};

export default Design;
