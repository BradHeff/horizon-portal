import React from 'react';

import Sections from '../../HOC/Sections';
import Step1 from '../../assets/images/Guide/Step1.jpg';

const Sec1 = (props) => {
  return (
        <Sections trans={true} color="light">
                    <div className='column col-md-12 col-6'>
                        <h1>Creating <span>Canvas</span> <br/>Account</h1>
                        <p>
                            Welcome to Horizon Christian School, Here we are going to be creating an account we can associate to your children's canvas account. <br/>
                            First we are going to click the link you see in the picture. This will now take you to the account creation page. <br />
                            Please proceed down to the next step.
                        </p>
                    </div>
                    <div className='column col-md-12 col-4'>
                        <div className='img-border-invert border-image'>
                            <img src={Step1} alt={Step1} className='img-responsive'/>
                        </div>
                    </div>
                </Sections>
            
            
        
  );
}

export default Sec1;