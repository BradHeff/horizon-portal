import React from 'react';
import Sec1 from '../Components/Guide/Sec1';
import Sec2 from '../Components/Guide/Sec2';
import Sec3 from '../Components/Guide/Sec3';

import Header from '../assets/images/horizon header.png';

const Guide = (props) => {
  return (
        <div className="p-relative intro" style={{paddingTop: '80px'}}>
            <div className='container grid-xl'>
            <div className='text-center title d-flex justify-content-center'>
                <h1><img src={Header} alt={Header} className='img-responsive'/></h1>
            </div>
            </div>
           <Sec1/>
           <Sec2/>
           
            <div className='container grid-xl'>
                <div className='text-center title'>
                    <h1>Retrieving Pairing Code</h1>
                </div>
            </div>
           
           <Sec3/>
           
        </div>
  );
}

export default Guide;