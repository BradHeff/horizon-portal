import React from 'react';

const Footer = (props) => {
  return (
    <div className='footer bg-footer'>
        <span>Copywrite ©<a href="https://www.horizon.sa.edu.au" className='btn btn-link'>Horizon Christian School</a>2022</span>
        <div className='columns align-items-center justify-content-center'>
            <div className='column col-4'>
                <p>JOURNEY FAITHFULLY WITH GOD</p>
            </div>
            <div className='column col-4'>
                <p>INSPIRE A LOVE OF LEARNING</p>
            </div>
            <div className='column col-4'>
                <p>NURTURE PARTNERSHIPS IN COMMUNITY</p>
            </div>

        </div>
    </div>
  );
}

export default Footer;