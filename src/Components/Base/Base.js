import React from 'react';
import Panels from '../../HOC/Panels';
// import {Link} from 'react-router-dom';

import Styles from '../../Styles/StyleFooter';
// import release from '../../assets/images/releasedate.png';

const Base = (props) => {
  return (
    <div className='p-relative'>     
    <div className='App-header overlay'  style={{minHeight: 'calc(100vh - 197px)'}}>
      <span className='support'><a className='btn btn-panel' href='mailto:djohnson@horizon.sa.edu.au?cc=bheffernan@horizon.sa.edu.au&subject=Horizon Canvas Choice Page Problem'>Contact Support</a></span>
      <div className='container grid-xl z-index text-center' style={{overflow: 'hidden'}}>
      <div className='ribbon z-index'>Released Wed 30th March</div>

      {/* <img src={release} alt={release} className='img-responsive' style={{marginLeft: 'auto', marginRight: 'auto'}}/> */}
        <div className='columns align-items-center justify-content-center mt-mb-3'>
          
          <div className='column col-md-10 col-4 col-mx-auto mb-2'>
            <div className='click-box-student'>
                <Panels title="Canvas Student" choice="KIDS" delay="0">
                    <p>Access to Canvas for Horizon Christian School Students</p>
                    {/* <a href='https://horizon-sa.instructure.com' className='btn btn-panel'>Go To Canvas</a> */}
                    <a href='#0' className='btn btn-panel'>Go To Canvas</a>
                </Panels>
            </div>
              
          </div>
          <div className='column col-md-10 col-4 col-mx-auto'>
          <div className='click-box-student'>
              <Panels title="Canvas Parent" choice="Parents" delay="300">
                  <p>Access to Canvas Parent for Horizon Christian School Parents and Caregivers.</p>
                  <div className='d-flex'>
                  {/* <a href='https://horizon-sa.instructure.com/login/canvas' className='btn btn-panel mr-2'>Go To Canvas</a> */}
                  <a href='#0' className='btn btn-panel mr-2'>Go To Canvas</a>
                  <a href='#0' className='btn btn-panel mr-2'>Go To Guide</a>
                  {/* <Link to='parent-account-guide' className='btn btn-panel'>Go To Guide</Link> */}
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