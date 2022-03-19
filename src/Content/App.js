import React, { Component } from 'react';
import Layout from '../HOC/Layout';
import Base from '../Components/Base/Base';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

class App extends Component {
  
  render() {
   
     return (
       <BrowserRouter>
       <Routes>
         <Route exact path="/" element={
            <Layout>
              <Base/>
            </Layout>
         }/>
         <Route path="guide" element={<Layout></Layout>}/>
        </Routes>
        </BrowserRouter>
     );
  }
}

export default App;
