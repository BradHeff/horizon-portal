import React from 'react';
import f0f from '../assets/images/horizon 404.png';
import {Link} from 'react-router-dom';

const FourOHFour = (props) => {
  return (
        <div className='App-header overlay-404'  style={{minHeight: 'calc(100vh - 197px)'}}>
            <span className='home z-index'><Link to="/" className='btn btn-home'>{'Home'}</Link></span>
           <img src={f0f} alt={f0f} className='img-responsive z-index'/>
        </div>
  );
}

export default FourOHFour;