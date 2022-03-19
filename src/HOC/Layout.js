import React from 'react';
import Header from '../Components/Header/Header';

const Layout = (props) => {
  return (
        <div>
            <Header/>
           {props.children}
           <div className='footer bg-footer'>
                <span>Horizon Christian School</span>
            </div>
        </div>
  );
}

export default Layout;