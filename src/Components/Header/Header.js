import React from 'react';
import './header.css';

import Logo from '../../assets/images/logo.png';

const Header = (props) => {
  return (
        <div className='header bg-footer'>
            <div className='container grid-xl'>
                <header className="navbar p-relative" style={{height: '100%'}}>
                    <section className="navbar-section">
                        <a href="/" className="navbar-brand mr-2"><img src={Logo} alt={Logo} className='img-logo' /></a>
                    </section>
                    <section className="navbar-section">
                        <a href='mailto:bheffernan@horizon.sa.edu.au?cc=djohnson@horizon.sa.edu.au&subject=Requesting help for Horizon Portal' className='btn btn-link'>Request Support</a>
                    </section>
                </header>
            </div>
        </div>
  );
}

export default Header;