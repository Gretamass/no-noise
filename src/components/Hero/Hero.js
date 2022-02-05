import image1 from '../images/main1.png';
import image2 from '../images/main2.png';
import image3 from '../images/main3.png';
import { Link } from 'react-router-dom';

import './Hero.css';
import '../../App.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container heroContainer">
          <div className="photoContainer">
            <div className="heroPhoto">
                <Link  to="/design"><img src={image1} alt="no noise hero" className='heroPhoto'/></Link>
            </div>
            <div className="heroPhoto">
                <Link  to="/sales"><img src={image2} alt="no noise hero" className='heroPhoto'/></Link>
            </div>
            <div className="heroPhoto">
                <Link  to="/rental"><img src={image3} alt="no noise hero" className='heroPhoto'/></Link>
            </div>
           
          </div>
          
      </div>

    </div>
  );
};

export default Hero;
