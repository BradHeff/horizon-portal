import React from 'react';
import Sec1 from '../Components/Guide/Sec1';
import Sec2 from '../Components/Guide/Sec2';
import Sec3 from '../Components/Guide/Sec3';

import Header from '../assets/images/horizon header.png';
import reHeader from '../assets/images/retieve header.png';

class Guide extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return (
                <div className="p-relative intro" style={{paddingTop: '80px'}}>
                    <div className='container grid-xl'>
                    <div className='text-center title d-flex justify-content-center' data-aos="flip-up">
                        <h1><img src={Header} alt={Header} className='img-responsive'/></h1>
                    </div>
                    </div>
                <Sec1/>
                <Sec2/>
                
                    <div className='container grid-xl'>
                        <div className='text-center title d-flex justify-content-center' data-aos="flip-up">
                        <h1><img src={reHeader} alt={reHeader} className='img-responsive'/></h1>
                        </div>
                    </div>
                
                <Sec3/>
                
                </div>
        );
    }
}

export default Guide;