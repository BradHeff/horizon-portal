import React from "react";
import Panels from "../../HOC/Panels";
import { Link } from "react-router-dom";
import Tooltip from '../Tooltip/Tooltip';
// import PDF from '../../assets/PDF/How to Access Canvas Parent App and Online (Parent Guide).pdf';

// import release from '../../assets/images/releasedate.png';

const Base = (props) => {
  return (
    <div className="position-relative background overlay">
      <div className="App-header">
        <div
          className="container z-index text-center"
          style={{ overflow: "hidden" }}
        >
          <div className="support">
            <Tooltip text="Let us know your thoughts.. ">
              <a
                className="btn btn-panel"
                href="mailto:canvas@horizon.sa.edu.au?subject=Horizon Canvas Feedback"
              >
                Give Feedback
              </a>
            </Tooltip>
            <Tooltip text="Request support from ICT">
              <a
                className="btn btn-panel" data-toggle="tooltip"
                href="mailto:djohnson@horizon.sa.edu.au?cc=bheffernan@horizon.sa.edu.au&subject=Horizon Canvas Support"
              >
                Request Support
              </a>
            </Tooltip>
          </div>
          {/* <div className='ribbon z-index'>Released Wed 30th March</div> */}

          {/* <img src={release} alt={release} className='img-responsive' style={{marginLeft: 'auto', marginRight: 'auto'}}/> */}
          <div className="row align-items-end justify-content-space">
            <div
              className="col-10 col-lg-5"
              style={{ marginBottom: "20px" }}
            >
              <div className="click-box-student">
                <Panels title="School Login" choice="KIDS" delay="0">                  
                  <p className="mb-4">
                    Access to Canvas for Students &
                    Teachers
                  </p>
                  <Tooltip text="Login to Canvas for Teachers and Students">
                    <a
                      href="https://horizon-sa.instructure.com/login/saml"
                      className="btn btn-panel"
                    >
                      Go To Canvas
                    </a>
                  </Tooltip>
                  {/* <a href='#0' className='btn btn-panel'>Go To Canvas</a> */}
                </Panels>
              </div>
            </div>
            <div
              className="col-10 col-lg-5"
              style={{ marginBottom: "20px" }}
            >
              <div className="click-box-student">
                <Panels title="Parent Login" choice="Parents" delay="300">
                  <p className="mb-4">
                    Access to Canvas Parent for Parents
                    and Caregivers.
                  </p>
                  <div className="d-flex">
                    <Tooltip text="Login to Parent Canvas">
                      <a
                        href="https://horizon-sa.instructure.com/login/canvas"
                        className="btn btn-panel me-2"
                      >
                        Go To Canvas
                      </a>
                    </Tooltip>
                    <Tooltip text="View and download our guides">
                      <Link to="parent-guides" className="btn btn-panel">
                        View Guides
                      </Link>
                    </Tooltip>
                  </div>
                </Panels>
              </div>
            </div>
          </div>
        </div>
        {/* <Styles color1="var(--light2)" color2="var(--light)" height="calc(100vh - 180px)"/>  */}
      </div>
      {/* <Styles trans={true}/>   */}
    </div>
  );
};

export default Base;
