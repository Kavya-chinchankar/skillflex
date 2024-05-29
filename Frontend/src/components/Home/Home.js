import React from "react";
import homeLogo from "../../Assets/images/Home/home-main.svg";
import Type from "../Home/Type";
import Whovr from "./Whovr";
import WhySkillFlex from "./WhySkillFlex";
// import Internship from "./Internship";
import Contact from "./Contact";
import InternshipDetail from "./InternshipDetail";

function Home() {
  return (
    <>
      {/* MAIN */}
      <div className="container-fluid home-section" id="home" style={{ paddingTop: '100px' }}>
        <div className="container home-content ">
          <div className="row">
            <div className="col-md-7 home-header">
              <h1 className="heading-name">
                <strong className="main-name display-4 fst-italic" style={{ paddingTop: '50px' }}> SkillFlex!!</strong>
              </h1>
              <h1 style={{ paddingBottom: 0, paddingTop: '25px' }} className="heading lead">
                Take Your Career to the Next Level with SkillFlex.
              </h1>

              <h1 style={{ paddingBottom: 15 }} className="heading lead">
                Join Our Exciting Internship Journey.
              </h1>

              <div style={{ paddingBottom: 50, textAlign: "left" }}>
                <Type />
              </div>

              <h1 style={{ paddingBottom: 15, fontSize: 20 }} className="display-1">
                You Have A Vision. We Have A Team To Get You There
              </h1>

              <div style={{ paddingTop: 10, textAlign: "left" }}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCd0kDs50Q72zUYZUI9rZ_Fi_Okh3cNP9-bflw9E5s-nvTiw/viewform?usp=sf_link">
                  <button type="button" className="btn btn-secondary">Get Started</button>
                </a>
              </div>

            </div>

            <div className="col-md-5" style={{ paddingBottom: 0 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "750px" }}
              />
            </div>

          </div>

        </div>

      </div>

      {/* WHO WE ARE */}
      <Whovr />

      {/* WHY US */}
      <WhySkillFlex />

      {/* Our INTERSHIP */}
      <InternshipDetail />

      {/* CONTACT */}
    <div className="container">
    <h1 className="heading-name " style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '15px' }}>
                    <strong className="main-name display-4 fst-italic" style={{ paddingTop: '50px', textAlign: 'center' }}> Contact Us!!!</strong>
     </h1>
    </div>
      <Contact />



    </>

  );
}

export default Home;
