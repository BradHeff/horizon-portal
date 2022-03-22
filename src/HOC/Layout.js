import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Layout = (props) => {
  return (
        <div className='p-relative'>
            <Header detectMob={props.detectMob}/>
           {props.children}
           
           <Footer />
        </div>
  );
}

export default Layout;