import React from 'react';

const Footer = (props) => {
  var date = new Date().getFullYear();
  return (
    <div className='footer bg-footer'>
        <span>Copyright ©<a href="https://www.horizon.sa.edu.au" className='btn btn-link'>Horizon Christian School</a>{date}</span>        
    </div>
  );
}

export default Footer;