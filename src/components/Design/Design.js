import React from 'react';
import './Design.css';
import Service from '../Service/Service';
import { designData } from '../Service/data';

const Design = () => {
  return (
    <div className='services'>
        <div className='containerTitle'>Projektavimas</div>
        <Service data={designData} />      
    </div>
  );
};

export default Design;
