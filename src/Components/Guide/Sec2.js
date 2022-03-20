import React from 'react';
import Sections from '../../HOC/Sections';
import step2 from '../../assets/images/Guide/Step2.png';

const Step2 = (props) => {
  return (
        <Sections trans={true} color="dark" bg='bg-light'>
           <div className='column col-md-12 col-4 col-mx-auto'>
              <div className='img-border border-image' data-aos="fade-down">
                <img src={step2} alt={step2} className='img-responsive'/>
              </div>
           </div>
           <div className='column col-md-12 col-6' data-aos="fade-right" data-aos-delay="200">
             <h1>Signup <span>Account</span><br />Form</h1>
             <p>Fill in the form pictured with your information</p>
             <p>The Student pairing Code can be found on your children's account for this process. This will link your
               account to your child's account allowing you to follow there progress through there schooling. <br/>
               Please continue below to find the pairing code on your child's account.
             </p>
             <p>Once you have your Pairing Code, enter it in the <b>Student Pairing Code</b> box and click the <b>Start Participating</b> button</p>
             <p><b>HINT:</b> Please make sure your password used is a secure password and <b>not</b> associated with any social media account for security purposes</p>
           </div>
        </Sections>
  );
}

export default Step2;