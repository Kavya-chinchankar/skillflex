import  { useState } from 'react'
import contact from '../../Assets/images/Home/contact.svg'
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function Contact() {

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [pno, setpno] = useState("");
    const [msg, setmsg] = useState("");
    const navigate = useNavigate();
  
    const cantactHandler = async (e) => {
      e.preventDefault();

        axios.post(
          "http://localhost:3000/contactus",
          {
            fname,
            lname,
            email,
            pno,
            msg,
          }
        )
        .then(result => console.log(result))
        .catch(err => console.log(err)) 

        setTimeout(() => {
            navigate('/');
          }, 1800)
    }

  
    return (
        <>

            <main>
                <div className="container py-5">
                    <div className="row g-5">
                        {/* <!-- Contact Information Block --> */}
                        <div className="col-xl-6">
                            <div className="aos-item" data-aos="fade-up" data-aos-delay="800">
                                <div className=" w-80 aos-item__inner" >
                                    <img src={contact} alt="" height={490} width={550} />
                                </div>
                            </div>
                            <div className="row row-cols-md-2 g-4">
                                <div className="aos-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="aos-item__inner">
                                        <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                                            <div className="d-flex justify-content-start">
                                                <i className="fa-solid fa-envelope h3 pe-2"></i>
                                                <span className="h5">Email</span>
                                            </div>
                                            <span>Skillflex24@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="aos-item" data-aos="fade-up" data-aos-delay="400">
                                    <div className="aos-item__inner">
                                        <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                                            <div className="d-flex justify-content-start">
                                                <i className="fa-solid fa-phone h3 pe-2"></i>
                                                <span className="h5">Phone</span>
                                            </div>
                                            <span>+91 9110614050</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


    

                        </div>

                        {/* <!-- Contact Form Block --> */}
                        <form className="col-xl-6" onSubmit={cantactHandler}>
                            <h2 className="pb-4">Leave a message</h2>
                            <div className="row g-4">
                                <div className="col-6 mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Fname</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John" value={fname}onChange={(e) => setfname(e.target.value)} />
                                </div>
                                <div className="col-6 mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Lname</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Doe" value={lname}onChange={(e) => setlname(e.target.value)} tabIndex={1} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email}onChange={(e) => setemail(e.target.value)} tabIndex={2}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="+1234567890" value={pno}onChange={(e) => setpno(e.target.value)} tabIndex={3} />
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Mentorship Details</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option value="1">Select</option>

                                    <option value="2">With Mentorship</option>
                                    <option value="3">Without Mentorship</option>
                                </select>
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={msg}onChange={(e) => setmsg(e.target.value)} tabIndex={4}></textarea>
                            </div>
                            <button type="button" className="btn btn-dark">Send Message</button>
                        </form>
                    </div>
                </div>
            </main>




        </>
    )
}
