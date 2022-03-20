import React from 'react';

import parent from '../assets/images/parent.png';
import student from '../assets/images/student.png';

const Panels = (props) => {
  return (
        <div className='panels' data-aos="fade-up" data-aos-delay={props.delay}>
            {props.choice==="KIDS"?<img src={student} alt={student} className='img-responsive'/>:<img src={parent} alt={parent} className='img-responsive'/>}
           <h3 style={{marginTop: '15px'}}>{props.title}</h3>
           {props.children}
        </div>
  );
}

export default Panels;