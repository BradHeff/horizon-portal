import React from 'react';
import Header from '../Components/Header/Header';


const Layout = (props) => {
  return (
        <div className='p-relative'>
            <Header detectMob={props.detectMob}/>
           {props.children}
           
           <div className='footer bg-footer'>
                <span>Copywrite ©<a href="https://www.horizon.sa.edu.au" className='btn btn-link'>Horizon Christian School</a>2022</span>
            </div>
        </div>
  );
}

export default Layout;