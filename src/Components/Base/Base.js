import React from 'react';
import Panels from '../../HOC/Panels';
import {Link} from 'react-router-dom';

import Styles from '../../Styles/StyleWhite';
const Base = (props) => {
  return (
    <div>
    <div className='App-header overlay'>
      <div className='container grid-xl z-index'>
        <div className='columns align-items-center justify-content-center'>
          <div className='column col-md-10 col-4 col-mx-auto mb-2'>
            <div className='click-box-student'>
                <Panels title="Students Portal" choice="KIDS">
                    <p>Access to the students portal of the Horizon Christian School Canvas</p>
                    <a href='https://horizon-sa.instructure.com' className='btn btn-panel'>Go To Canvas</a>
                </Panels>
            </div>
              
          </div>
          <div className='column col-md-10 col-4 col-mx-auto'>
          <div className='click-box-student'>
              <Panels title="Parents Portal" choice="Parents">
                  <p>Access to the parents portal of Horizon christian School Canvas</p>
                  <div className='d-flex'>
                  <a href='#0' className='btn btn-panel mr-2'>Go To Canvas</a>
                  <Link to='/guide' className='btn btn-panel'>Go To Guide</Link>
                  </div>
              </Panels>
            </div>
          </div>
        </div>           
      </div>
      <Styles trans={true}/>
    </div>    
  </div>
  );
}

export default Base;