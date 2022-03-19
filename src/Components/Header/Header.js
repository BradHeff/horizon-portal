import React from 'react';
import './header.css';
import head from '../../assets/images/header.png';

const Header = (props) => {
  return (
        <div className='header bg-footer'>
            <img src={head} alt={head} className='img-responsive' />      
            {/* <a href='mailto:bheffernan@horizon.sa.edu.au?cc=djohnson@horizon.sa.edu.au&subject=Requesting help for Horizon Portal' className='btn btn-link'>Request Support</a> */}
        </div>
  );
}

export default Header;