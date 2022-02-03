import React from 'react';
import './Service.css';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Services = ({data}) => {
  return (
      <div className='serviceFull'>
          
        {data.map((design, index) => { 

            function NewlineText(props) {
                const text = props.text;
                const newText = text.split('\n').map(str => <p>{str}</p>);
                
                return newText;
            }


            return(
                <div className='serviceContainer' key={index}>
                    <div className='servicePhotoDiv'>
                        <img src={design.image} alt={design.alt} className='serviceImage'/>
                    </div>
     
                            <div className='serviceText' >
                            
                                <div className='serviceName'>
                                    {design.name}
                                </div>
                                <div className='serviceInfo'>
                                    <NewlineText text={design.description} />
                                </div>
                                <div className='serviceButton'>
                                    <PrimaryButton buttontext="Plačiau" />
                                </div>
                            </div>
                
                </div>
            )
        })}
        
      </div>
  );
};

export default Services;
