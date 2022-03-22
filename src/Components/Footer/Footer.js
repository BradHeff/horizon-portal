import React from 'react';

const Footer = (props) => {
  return (
    <div className='footer bg-footer'>
        <span>Copywrite ©<a href="https://www.horizon.sa.edu.au" className='btn btn-link'>Horizon Christian School</a>2022</span>
        <div className='container grid-xl'>
        <div className='columns align-items-center justify-content-center mt-2'>
            <div className='column col-md-12 col-4 text-center'>
                <p>JOURNEY FAITHFULLY WITH GOD</p>
            </div>
            <div className='column col-md-12 col-4 text-center'>
                <p>INSPIRE A LOVE OF LEARNING</p>
            </div>
            <div className='column col-md-12 col-4 text-center'>
                <p>NURTURE PARTNERSHIPS IN COMMUNITY</p>
            </div>

        </div>
        </div>
    </div>
  );
}

export default Footer;