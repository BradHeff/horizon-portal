import React from "react";
import { Link } from "react-router-dom";
import Guides from "../HOC/Guides";

import diagram from "../assets/images/Guide/diagram.png";
import Header from "../assets/images/horizon header2.png";

import I1 from "../assets/images/PDF/Canvas Parent Online.png";
import I2 from "../assets/images/PDF/How to Use the Canvas Parent App.png";
import I3 from "../assets/images/PDF/Horizon Parent Portal.png";
import I4 from "../assets/images/PDF/How to Add a Second Child.png";
import I5 from "../assets/images/PDF/Canvas Parent Notifications.png";
// import I6 from '../assets/images/PDF/How to Use the Canvas Parent App.png';

//PDFS
import HACPO from "../assets/PDF/How to Access Canvas Parent - Online (Parent Guide).pdf";
import HACPA from "../assets/PDF/How to Access Canvas Parent - The App (Parent Guide).pdf";
// import HACPAO from '../assets/PDF/How to Access Canvas Parent App and Online (Parent Guide).pdf';
import HAHPP from "../assets/PDF/How to Access the Horizon Parent Portal in Canvas Parent - The App (Parent Guide).pdf";
import HASC from "../assets/PDF/How to Add a Second Child to Canvas Parent (Parent Guide).pdf";
import HCNS from "../assets/PDF/How to Change Notification Settings in Canvas Parent - The App (Parent Guide).pdf";
import HUCP from "../assets/PDF/How to Use Canvas Parent - The App (Parent Guide).pdf";
class ParentGuides extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="secs" style={{marginBottom: '100px'}}>
        <div className="position-relative intro" style={{ paddingTop: "80px" }}>
          <span className="home">
            <Link to="/" className="btn btn-home">
              {"Home"}
            </Link>
          </span>
          <div className="container">
            <div className="text-center d-flex justify-content-center mb-2 mb-lg-4">
              <h1>
                <img src={Header} alt={Header} className="img-sec" />
              </h1>
            </div>
          </div>

          {/*ROW 1*/}
          <Guides
            trans={true}
            color="light"
            title="How to Access"
            titleColor="Canvas Parent"
            title2="The App"
            image={diagram}
            link={HACPA}
          >
            Learn how to download the Canvas Parent App and create an account
            linked to your child.
          </Guides>
          {/*ROW 2*/}
          <Guides
            trans={true}
            color="dark"
            bg="bg-light"
            title="How to Access"
            titleColor="Canvas Parent"
            title2="Online"
            image={I1}
            link={HACPO}
          >
            Learn how to access the online version of Canvas Parent to see more
            detail about your children's progress.
          </Guides>
          {/*ROW 3*/}
          <Guides
            trans={true}
            color="light"
            bg="bg-white"
            title="How to Access the"
            titleColor="Horizon Parent Portal"
            title2="in Canvas Parent The App"
            image={I2}
            link={HAHPP}
          >
            Access the Horizon Parent Portal to find a growing number of school
            related links, guides and apps.
          </Guides>
          {/*ROW 4*/}
          <Guides
            trans={true}
            color="dark"
            bg="bg-light"
            title="How To"
            titleColor="Add a Second Child"
            title2=" to Canvas Parent The App"
            image={I4}
            link={HASC}
          >
            Learn how to add all your children to the Canvas Parent App to
            follow their progress.
          </Guides>
          {/*ROW 5*/}
          <Guides
            trans={true}
            color="light"
            bg="bg-white"
            title="How To"
            titleColor="Use Canvas Parent"
            title2="The App"
            image={I3}
            link={HUCP}
          >
            The Basic How to Guide for the Canvas Parent App.
          </Guides>
          {/*ROW 6*/}
          <Guides
            trans={true}
            color="footer"
            bg="bg-light"
            title="How To"
            titleColor="Change Notification Settings"
            title2="in Canvas Parent The App"
            image={I5}
            link={HCNS}
          >
            Customise your notifications so you only see the things that are
            important for you.
          </Guides>
        </div>
      </div>
    );
  }
}

export default ParentGuides;
