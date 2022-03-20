import React from 'react';
import Sections from '../../HOC/Sections';

import No1 from '../../assets/images/Guide/Step3.1.png';
import No2 from '../../assets/images/Guide/Step3.2.png';
import No3 from '../../assets/images/Guide/Step3.3.png';

const Sec3 = (props) => {
  return (
        <Sections trans={true} color="footer" bg="bg-white">
            <div className='column col-md-12 col-4'>
              <div className="card h-100" data-aos="fade-down">
                <div className="card-image text-center">
                  <img src={No1} alt={No1} className='img-responsive'/>
                </div>
                <div className="card-header">
                  <div className="card-title h5">Go to Settings</div>
                  <div className="card-subtitle text-gray">Account &gt; Settings</div>
                </div>
                <div className="card-body">
                  <p>Log into your child's account on the student canvas.<br />
                  Once you are logged in, navigate to the account button on the top left and select <b>Settings</b></p>
                </div>
              </div>
            </div>
            <div className='column col-md-12 col-4'>
              <div className="card h-100" data-aos="fade-down" data-aos-delay="200">
                <div className="card-image text-center">
                  <img src={No2} alt={No2} className='img-responsive'/>
                </div>
                <div className="card-header">
                  <div className="card-title h5">Click Pair with Observer Button</div>
                  <div className="card-subtitle text-gray"></div>
                </div>
                <div className="card-body">
                <p>On the right side of the screen you will find a button called <b>Pair with Observer</b> in your child's settings page.<br/>
                Click on this button to retrieve your pairing code for the sign up of your canvas account.</p>
                </div>
              </div>
            </div>
            <div className='column col-md-12 col-4'>
              <div className="card h-100" data-aos="fade-down" data-aos-delay="400">
                <div className="card-image text-center">
                  <img src={No3} alt={No3} className='img-responsive'/>
                </div>
                <div className="card-header">
                  <div className="card-title h5">Note Pairing Code</div>
                  <div className="card-subtitle text-gray"></div>
                </div>
                <div className="card-body">
                <p>Now you will see a windows with your pairing number.<br/>
                This is the number you need to enter in the sign up form we discussed above. Enter this number in the <b>Student Pairing Code</b> field of the form</p>
                </div>
              </div>
            </div>
        </Sections>
  );
}

export default Sec3;