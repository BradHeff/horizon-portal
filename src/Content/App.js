import React, { Component } from 'react';
import Layout from '../HOC/Layout';
import Base from '../Components/Base/Base';
import { Routes, Route} from 'react-router-dom';
import AOS from 'aos';
import Guide from './Guide';
class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out-back',
      disable: 'mobile'
    });
  }
  render() {
   
     return (
       
       <Routes>
         <Route exact path="/" element={
            <Layout>
              <Base/>
            </Layout>
         }/>
         <Route path="parent-account-guide" element={<Layout><Guide/></Layout>}/>
        </Routes>
       
     );
  }
}

export default App;
