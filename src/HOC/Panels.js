import React from 'react';

import parent from '../assets/images/prnt.png';
import student from '../assets/images/stdnt.png';

const Panels = (props) => {
  return (
        <div className='panels'>
            {props.choice==="KIDS"?<img src={student} alt={student} className='img-responsive'/>:<img src={parent} alt={parent} className='img-responsive'/>}
           <h3 style={{marginTop: '15px'}}>{props.title}</h3>
           {props.children}
        </div>
  );
}

export default Panels;