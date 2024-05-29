import React from 'react'
import '../../Assets/css/InternshipDetails.css'


import ml from "../../Assets/images/Internship/ml.jpg"
import fs from "../../Assets/images/Internship/full stack.jpg"
import java from "../../Assets/images/Internship/java.jpg"
import fig from "../../Assets/images/Internship/figma.jpeg"
import deep from "../../Assets/images/Internship/deep.jpeg"
import py from "../../Assets/images/Internship/python.jpg"
import sql from "../../Assets/images/Internship/sql.jpg"

export default function Internship_Detail() {
  return (
    <>
    
    <div className="portfolio-section dynamic-background" id="port" style={{ backgroundColor: '#DBDFEA' , margin:0,padding:0  }}>
        <div className="container">
          <h2 className="portfolio-heading display-4 fst-italic" style={{ paddingTop: '30px'}}>Our Internship!!</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="portfolio-item">
                <img src={ml} alt="Project 1"/>
                <div className="item-details">
                  <h3 className="item-title">Machine learning</h3>
                  <p className="item-description">Explore the fundamentals of machine learning, from data preprocessing to ethical and legal considerations, to empower your understanding and application of this transformative technology. Where algorithms unravel patterns, predictions emerge, and data transforms into actionable insights.</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCd0kDs50Q72zUYZUI9rZ_Fi_Okh3cNP9-bflw9E5s-nvTiw/viewform?usp=sf_link">
                <button type="button" className="btn btn-primary" style={{backgroundColor:'#0205b1'}}>Get Started</button>
                </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-item">
                <img src={fs} alt="Project 1"/>
                <div className="item-details">
                  <h3 className="item-title">Full stack</h3>
                  <p className="item-description">Unlock the world of web development with our structured curriculum, beginning with HTML for content structure, CSS for styling, and Bootstrap for responsive design. Delve into JavaScript for interactivity, MySQL and MongoDB for database management, and Node js for server-side scripting.</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCd0kDs50Q72zUYZUI9rZ_Fi_Okh3cNP9-bflw9E5s-nvTiw/viewform?usp=sf_link">
                <button type="button" className="btn btn-primary" style={{backgroundColor:'#0205b1'}}>Get Started</button>
                </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-item">
                <img src={java} alt="Project 1"/>
                <div className="item-details">
                  <h3 className="item-title">Java Programming</h3>
                  <p className="item-description">Unlock the world of web development with our structured curriculum, beginning with HTML for content structure, CSS for styling, and Bootstrap for responsive design. Delve into JavaScript for interactivity, MySQL and MongoDB for database management, and Node js for server-side scripting.</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCd0kDs50Q72zUYZUI9rZ_Fi_Okh3cNP9-bflw9E5s-nvTiw/viewform?usp=sf_link">
                <button type="button" className="btn btn-primary" style={{backgroundColor:'#0205b1'}}>Get Started</button>
                </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-item">
                <img src={fig} alt="Project 1"/>
                <div className="item-details">
                  <h3 className="item-title">Figma</h3>
                  <p className="item-description">Explore the design realm with Figma, starting from the basics of interface navigation to advanced prototyping. Dive into components, styles, and interactive design techniques, leveraging Figma's powerful tools for seamless workflow. Put your skills into practice with hands-on projects and user-friendly interfaces.</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCd0kDs50Q72zUYZUI9rZ_Fi_Okh3cNP9-bflw9E5s-nvTiw/viewform?usp=sf_link">
                <button type="button" className="btn btn-primary" style={{backgroundColor:'#0205b1'}}>Get Started</button>
                </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-item">
                <img src={deep} alt="Project 1"/>
                <div className="item-details">
                  <h3 className="item-title">Deep learning</h3>
                  <p className="item-description">Discover Deep Learning fundamentals, neural network types, and practical projects. Learn about key differences from Machine Learning, explore architectures like CNNs, RNNs and essential concepts including forward propagation, backpropagation, and activation functions.Gain the skills to innovate and solve real-world problems.</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCd0kDs50Q72zUYZUI9rZ_Fi_Okh3cNP9-bflw9E5s-nvTiw/viewform?usp=sf_link">
                <button type="button" className="btn btn-primary" style={{backgroundColor:'#0205b1'}}>Get Started</button>
                </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-item">
                <img src={py} alt="Project 1"/>
                <div className="item-details">
                  <h3 className="item-title">Python programming</h3>
                  <p className="item-description">Embark on your Python journey with our comprehensive guide, covering everything from basic syntax and data structures to advanced concepts like file handling and plotting with Matplotlib. Dive into modules and packages, explore the Python Standard Library, and put your skills to the test with basic Python projects</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCd0kDs50Q72zUYZUI9rZ_Fi_Okh3cNP9-bflw9E5s-nvTiw/viewform?usp=sf_link">
                <button type="button" className="btn btn-primary" style={{backgroundColor:'#0205b1'}}>Get Started</button>
                </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4" style={{ padding:0,marginBottom:50  }}>
              <div className="portfolio-item">
                <img src={sql} alt="Project 1"/>
                <div className="item-details">
                  <h3 className="item-title">SQL</h3>
                  <p className="item-description">Delve into the world of databases with a comprehensive curriculum covering SQL fundamentals, advanced techniques, and practical projects. From mastering basic syntax to tackling complex topics like window functions and recursive queries, enhance your SQL proficiency for real-world data management challenges.</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCd0kDs50Q72zUYZUI9rZ_Fi_Okh3cNP9-bflw9E5s-nvTiw/viewform?usp=sf_link">
                <button type="button" className="btn btn-primary" style={{backgroundColor:'#0205b1'}}>Get Started</button>
                </a>
                </div>
              </div>
            </div>
                         
          </div>
        </div>
      </div>
     

      
    </>
  )
}
