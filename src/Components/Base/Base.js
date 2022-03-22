import React from 'react';
import Panels from '../../HOC/Panels';
import {Link} from 'react-router-dom';

import Styles from '../../Styles/StyleFooter';

const Base = (props) => {
  return (
    <div className='p-relative'>     
    <div className='App-header overlay'  style={{minHeight: 'calc(100vh - 196px)'}}>
      <span className='support'><a href='#0'>Support</a></span>
      <div className='container grid-xl z-index'>
        <div className='columns align-items-center justify-content-center'>
          <div className='column col-md-10 col-4 col-mx-auto mb-2'>
            <div className='click-box-student'>
                <Panels title="Canvas Student" choice="KIDS" delay="0">
                    <p>Access to the students portal of the Horizon Christian School Canvas</p>
                    <a href='https://horizon-sa.instructure.com' className='btn btn-panel'>Go To Canvas</a>
                </Panels>
            </div>
              
          </div>
          <div className='column col-md-10 col-4 col-mx-auto'>
          <div className='click-box-student'>
              <Panels title="Canvas Parent" choice="Parents" delay="300">
                  <p>Access to the parents portal of Horizon christian School Canvas</p>
                  <div className='d-flex'>
                  <a href='https://horizon-sa.instructure.com/login/canvas' className='btn btn-panel mr-2'>Go To Canvas</a>
                  <Link to='parent-account-guide' className='btn btn-panel'>Go To Guide</Link>
                  </div>
              </Panels>
            </div>
          </div>
        </div>           
      </div>      
    </div>  
    <Styles trans={true}/>  
  </div>
  );
}

export default Base;