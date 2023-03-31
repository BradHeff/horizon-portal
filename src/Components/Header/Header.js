import React from 'react';
import './header.css';
import head from '../../assets/images/header.png';
import headSmall from '../../assets/images/header-small.png'
const Header = (props) => {
  
  return (
        <div className='header'>
          <div>            
            {/*window.innerWidth <= 680?<img src={headSmall} alt={headSmall} className='img-responsive' /> :<img src={head} alt={head} className='img-responsive' /> */}
          </div>
            <div className='support'>
              <a className='btn btn-panel mr-auto' href='mailto:canvas@horizon.sa.edu.au?subject=Horizon Canvas Feedback'>Give Feedback</a>
              <a className='btn btn-panel' href='mailto:djohnson@horizon.sa.edu.au?cc=bheffernan@horizon.sa.edu.au&subject=Horizon Canvas Support'>Request Support</a>
            </div>
      
        </div>
  );
}

export default Header;