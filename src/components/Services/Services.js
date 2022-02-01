import React from 'react';
import './Services.css';

import photo1 from '../images/design1.png';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Services = () => {
  return (
    <div className='serviceContainer'>
        <div className='servicePhotoDiv'>
            <img src={photo1} className='serviceImage'/>
        </div>
        <div className='serviceText'>
            <div className='serviceName'>
                TRIUKŠMO KONTROLĖ IR AKUSTIKA
            </div>
            <div className='serviceInfo'>
                PATALPŲ AKUSTIKA <br />

                GARSO IZOLIACIJA <br />

                TRIUKŠMO IR GARSO VALDYMO SPRENDIMAI
            </div>
            <div className='serviceButton'>
                <PrimaryButton buttontext="Plačiau" />
            </div>
        </div>
    </div>
  );
};

export default Services;
