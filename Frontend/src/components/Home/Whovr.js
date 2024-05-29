import React from 'react'
import whorv from "../../Assets/images/Home/home2.svg";

export default function Whovr() {
  return (
    <div>
       <div className="container-fluid home-section" id="home" style={{paddingTop:'0',marginTop:'0'}} >
      <div className="container home-content ">
        <div className="row">
        {/* <div className="col-md-6" style={{ paddingBottom: 20 }}> */}
        <div className="col-md-6" style={{}}>
          <img
                src={whorv}
                alt="home pic"
                className="img-fluid"
                // style={{ maxHeight: "450px" }}
                style={{ maxHeight: "750px"}}
              />
          </div>

          <div className="col-md-6 home-header" style={{paddingTop:'125px'}} >
          <h1 className="heading-name">            
             <strong className="main-name display-4 fst-italic" style={{paddingTop : '50px' }}> Who We Are??!!</strong>
          </h1>
          <h1 style={{ paddingBottom: 15,paddingTop : '25px' }} className="heading lead">
          <b>SkillFlex,</b>your trusted partner for comprehensive IT services, consultancy, and innovative software solutions,
            driving digital transformation and empowering businesses to thrive in the modern age.
              </h1>

              {/* <h1 style={{ paddingBottom: 15 }} className="heading lead">
              <b>SkillFlex,</b> Empowering aspiring tech professionals with practical, hands-on learning experiences to bridge the
            gap between theory and real-world application, fostering skill development and industry readiness.
              </h1> */}

              <h1 style={{ paddingBottom: 15, fontSize: 20 }} className="display-1">
              At <b>SkillFlex,</b> we don’t just write code; we craft digital solutions that resonate with our clients’ aspirations. Our mission? To empower the youth, especially students, by diving headfirst into uncharted technological territories. We believe in fostering self-awareness, bridging the gap between academia and industry, and guiding young minds toward their dreams and fostering skill development and industry readiness.
              </h1>

          </div>
        </div>

      </div>

    </div>

    </div>
  )
}



