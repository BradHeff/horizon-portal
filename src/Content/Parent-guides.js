import React from 'react';
import {Link} from 'react-router-dom';
import Guides from '../HOC/Guides';

import diagram from '../assets/images/Guide/diagram.png';
import Header from '../assets/images/horizon header2.png';
class ParentGuides extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
}
render() {
  return (
        <div className='secs'>
           <div className="p-relative intro" style={{paddingTop: '80px'}}>
              <span className='home'><Link to="/" className='btn btn-home'>{'Home'}</Link></span>
              <div className='container grid-xl'>
                <div className='text-center title d-flex justify-content-center'>
                    <h1><img src={Header} alt={Header} className='img-sec'/></h1> 
                </div>
              </div>
                
                  {/*ROW 1*/}
                  <Guides trans={true} color="light" title="How to Access" titleColor="Canvas Parent" title2="The App" image={diagram} link="#0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s                  
                  </Guides>                 
                  {/*ROW 2*/}
                  <Guides trans={true} color="dark" bg="bg-light" title="How to Access" titleColor="Canvas Parent" title2="Online" image={diagram} link="#0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </Guides>
                  {/*ROW 3*/}                  
                  <Guides trans={true} color="footer" bg="bg-white" title="How to Access the" titleColor="Horizon Parent Portal" title2="in Canvas Parent The App" image={diagram} link="#0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </Guides>
                  {/*ROW 4*/}                  
                  <Guides trans={true} color="light" bg="bg-light" title="How To" titleColor="Add a Second Child" title2=" to Canvas Parent The App" image={diagram} link="#0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </Guides>
                  {/*ROW 5*/}                  
                  <Guides trans={true} color="dark" bg="bg-white" title="How To" titleColor="Use Canvas Parent" title2="The App" image={diagram} link="#0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </Guides>
                  {/*ROW 6*/}                  
                  <Guides trans={true} color="footer" bg="bg-light" title="How To" titleColor="Change Notification Settings" title2="in Canvas Parent The App" image={diagram} link="#0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </Guides>
              </div>
        </div>
  );
  }
}

export default ParentGuides;
