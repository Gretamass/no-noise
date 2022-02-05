import React from 'react';
import './Sales.css';
import Service from '../Service/Service';
import { salesData } from '../Service/data';

const Design = () => {
  return (
    <div className='services'>
        <div className='containerTitle'>Prekyba</div>
        <Service data={salesData} />
    </div>
  );
};

export default Design;
