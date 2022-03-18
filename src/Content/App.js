import React, { Component } from 'react';

class App extends Component {
  render() {
     return (
        <div className='App-header'>
          <div className='container grid-xl'>
          <div className='columns align-items-center justify-content-center'>
            <div className='column col-md-10 col-4 col-mx-auto mb-2'>
              <div className='click-box-student'>
                <h1>COL 1</h1>
              </div>
                
            </div>
            <div className='column col-md-10 col-4 col-mx-auto'>
            <div className='click-box-student'>
                <h1>COL 2</h1>
              </div>
            </div>
          </div>           
          </div>
        </div>
     );
  }
}

export default App;
