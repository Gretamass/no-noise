import React from 'react';
import './PrimaryButton.css';
import { Link } from 'react-router-dom';


const PrimaryButton = ({buttontext, link}) => {
  return (
        
    <Link to={`${link}`}><button className="primaryButton">{buttontext}</button></Link>
    );
};

export default PrimaryButton;
