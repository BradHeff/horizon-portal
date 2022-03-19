import React from 'react';
import Sections from '../../HOC/Sections';

import No1 from '../../assets/images/Guide/Step3.1.png';
import No2 from '../../assets/images/Guide/Step3.2.png';
import No3 from '../../assets/images/Guide/Step3.3.png';

const Sec3 = (props) => {
  return (
        <Sections trans={true} color="footer" bg="bg-white">
            <div className='column col-12'>
                <h3>Go to Settings</h3>
                <p>Log into your child's account on the student canvas.<br />
                Once you are logged in, navigate to the account button on the top left and select <b>Settings</b> (See image #1)</p>

                <h3>Click Pair with Observer Button</h3>
                <p>On the right side of the screen you will find a button called <b>Pair with Observer</b> in your child's settings page.<br/>
                Click on this button to retrieve your pairing code for the sign up of your canvas account. (See Image #2)</p>

                <h3>Note Pairing Code</h3>
                <p>Now you will see a windows with your pairing number. (See Image #3)<br/>
                This is the number you need to enter in the sign up form we discussed above. Enter this number in the <b>Student Pairing Code</b> field of the form</p>
            </div>
           <div className='column col-md-12 col-4'>
               <h3>Image #1</h3>
                <img src={No1} alt={No1} className='img-responsive'/>
           </div>
           <div className='column col-md-12 col-4'>
           <h3>Image #2</h3>
           <img src={No2} alt={No2} className='img-responsive'/>
           </div>
           <div className='column col-md-12 col-4'>
           <h3>Image #3</h3>
           <img src={No3} alt={No3} className='img-responsive'/>
           </div>
        </Sections>
  );
}

export default Sec3;