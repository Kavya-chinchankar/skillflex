import React from 'react'

import '../../Assets/css/Internship.css'
import ml from "../../Assets/images/Internship/ml.jpg"
import fs from "../../Assets/images/Internship/full stack.jpg"
import IOT from "../../Assets/images/Internship/IOT.jpeg"
import fig from "../../Assets/images/Internship/figma.jpeg"
import deep from "../../Assets/images/Internship/deep.jpeg"
import ad from "../../Assets/images/Internship/ad.avif"

export default function Internship() {
    return (
        <>

            <div className="container-fluid" style={{marginBottom:0,paddingBottom:0}}>
                <h1 className="heading-name" style={{textAlign:'center',paddingTop:'30px'}}>
                    <strong className="main-name display-4 fst-italic" style={{ paddingTop: '80px'}}>Our Internship!!</strong>
                </h1>

                <div className="card-list">


                    <div href="/ml" className="card-item">
                        <img src={ml} alt="" />

                        <span className="Machine learning">Machine learning</span>
                        <p>Explore the fundamentals of machine learning, from data preprocessing to ethical and legal considerations, to empower your understanding and application of this transformative technology. Where algorithms unravel patterns, predictions emerge, and data transforms into actionable insights.</p>
                        <div style={{ paddingTop: 10, textAlign: "center" }}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCd0kDs50Q72zUYZUI9rZ_Fi_Okh3cNP9-bflw9E5s-nvTiw/viewform?usp=sf_link">
                <button type="button" className="btn btn-primary" style={{backgroundColor:'#0205b1'}}>Get Started</button>
                </a>
              </div>


                    </div>


                    <div href="/fullstact" className="card-item">
                        <img src={fs} alt="" />

                        <span className="Full stack">Full stack</span>
                        <p>Unlock the world of web development with our structured curriculum, beginning with HTML for content structure, CSS for styling, and Bootstrap for responsive design. Delve into JavaScript for interactivity, MySQL and MongoDB for database management, and Node js for server-side scripting. </p>

                        <div style={{ paddingTop: 10, textAlign: "center" }}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCd0kDs50Q72zUYZUI9rZ_Fi_Okh3cNP9-bflw9E5s-nvTiw/viewform?usp=sf_link">
                <button type="button" className="btn btn-primary" style={{backgroundColor:'#0205b1'}}>Get Started</button>
                </a>
              </div>


                    </div>

                    <div href="/java" className="card-item">
                        <img src={IOT} alt="" />
                        <span className="IOT">Java Programming</span>
                        <p>Embark on your Java journey with our guide covering basic syntax, object-oriented programming, exception handling, collections, file handling, multithreading, JDBC for database connectivity, GUI programming, and unit testing. Dive into hands-on project work to solidify your skills and unleash your Java expertise.</p>

                        <div style={{ paddingTop: 10, textAlign: "center" }}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCd0kDs50Q72zUYZUI9rZ_Fi_Okh3cNP9-bflw9E5s-nvTiw/viewform?usp=sf_link">
                <button type="button" className="btn btn-primary" style={{backgroundColor:'#0205b1'}}>Get Started</button>
                </a>
              </div>


                    </div>


                    <div href="/figma" className="card-item">
                        <img src={fig} alt="" />
                        <span className="Figma">Figma
                        </span>
                        <p>Explore the design realm with Figma, starting from the basics of interface navigation to advanced prototyping. Dive into components, styles, and interactive design techniques, leveraging Figma's powerful tools for seamless workflow. Put your skills into practice with hands-on projects and user-friendly interfaces.</p>

                        <div style={{ paddingTop: 10, textAlign: "center" }}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCd0kDs50Q72zUYZUI9rZ_Fi_Okh3cNP9-bflw9E5s-nvTiw/viewform?usp=sf_link">
                <button type="button" className="btn btn-primary" style={{backgroundColor:'#0205b1'}}>Get Started</button>
                </a>
              </div>


                    </div>


                    <div href="/dl" className="card-item" style={{listStyle:'none', color:'darkblue'}}>
                        <img src={deep} alt="" />
                        <span className="Deep learning">Deep learning</span>
                        <p>Discover Deep Learning fundamentals, neural network types, and practical projects. Learn about key differences from Machine Learning, explore architectures like CNNs, RNNs and essential concepts including forward propagation, backpropagation, and activation functions.</p>

                        <div style={{ paddingTop: 10, textAlign: "center" }}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCd0kDs50Q72zUYZUI9rZ_Fi_Okh3cNP9-bflw9E5s-nvTiw/viewform?usp=sf_link">
                <button type="button" className="btn btn-primary" style={{backgroundColor:'#0205b1'}}>Get Started</button>
                </a>
              </div>


                    </div>


                    <div href="/python" className="card-item">
                        <img src={ad} alt="" />
                        <span className="Python programming">Python Programming</span>
                        <p>Embark on your Python journey with our comprehensive guide, covering everything from basic syntax and data structures to advanced concepts like file handling and plotting with Matplotlib. Dive into modules and packages, explore the Python Standard Library, and put your skills to the test with basic Python projects.</p>

                        <div style={{ paddingTop: 10, textAlign: "center" }}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCd0kDs50Q72zUYZUI9rZ_Fi_Okh3cNP9-bflw9E5s-nvTiw/viewform?usp=sf_link">
                <button type="button" className="btn btn-primary" style={{backgroundColor:'#0205b1'}}>Get Started</button>
                </a>
              </div>


                    </div>


                </div>

                <div className="card-list">
                    
                <div href="/sql" className="card-item1" style={{ textAlign: 'center' }}>
                        <img src={fs} alt="" />
                        <span className="SQL">SQL</span>
                        <p>Delve into the world of databases with a comprehensive curriculum covering SQL fundamentals, advanced techniques, and practical projects. From mastering basic syntax to tackling complex topics like window functions and recursive queries, enhance your SQL proficiency for real-world data management challenges."</p>

                        <div style={{ paddingTop: 10, textAlign: "center" }}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCd0kDs50Q72zUYZUI9rZ_Fi_Okh3cNP9-bflw9E5s-nvTiw/viewform?usp=sf_link">
                <button type="button" className="btn btn-primary" style={{backgroundColor:'#0205b1'}}>Get Started</button>
                </a>
              </div>

                    </div>

                </div>

            </div>


        </>
    )
}
