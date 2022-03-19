import React from 'react';
import './header.css';
import head from '../../assets/images/header.png';
import headSmall from '../../assets/images/header-small.png'
const Header = (props) => {
  
  return (
        <div className='header bg-footer'>
            {window.innerWidth <= 680?<img src={headSmall} alt={headSmall} className='img-responsive' /> :<img src={head} alt={head} className='img-responsive' /> }
        </div>
  );
}

export default Header;