import React from 'react';

import Sections from '../../HOC/Sections';
import Step1 from '../../assets/images/Guide/Step1.jpg';

const Sec1 = (props) => {
  return (
        <Sections trans={true} color="light">
            <div className='column col-md-12 col-6'>
                <h1 data-aos="slide-left" data-aos-delay="200">Creating <span>Canvas</span> <br/>Account</h1>
                <p data-aos="slide-left" data-aos-delay="400">
                    Welcome to Horizon Christian School, Here we are going to be creating an account we can associate to your children's canvas account. <br/>
                    First we are going to click the link you see in the picture. This will now take you to the account creation page. <br />
                    Please proceed down to the next step.
                </p>
            </div>
            <div className='column col-md-12 col-4'>
                <div className='img-border-invert border-image' data-aos="slide-right" data-aos-delay="200">
                    <img src={Step1} alt={Step1} className='img-responsive'/>
                </div>
            </div>
        </Sections>
            
            
        
  );
}

export default Sec1;