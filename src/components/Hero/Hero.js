import image1 from '../images/main1.png';
import image2 from '../images/main2.png';
import image3 from '../images/main3.png';

import './Hero.css';
import '../../App.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container heroContainer">
          <div className="photoContainer">
            <div className="heroPhoto">
                <img src={image1} alt="no noise hero" className='heroPhoto' />
            </div>
            <div className="heroPhoto">
                <img src={image2} alt="no noise hero" className='heroPhoto' />
            </div>
            <div className="heroPhoto">
                <img src={image3} alt="no noise hero" className='heroPhoto' />
            </div>
           
          </div>
          
      </div>

    </div>
  );
};

export default Hero;
