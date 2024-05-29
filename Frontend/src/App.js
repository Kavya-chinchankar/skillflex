import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
// import LoginScreen from './components/AuthScreens/LoginScreen';
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar';
// import RegisterScreen from './components/AuthScreens/RegisterScreen';
// import ForgotPasswordScreen from './components/AuthScreens/ForgotPasswordScreen';
import Internship from "./components/Home/Internship";
import AboutUs from './components/Home/AboutUs';
import Footer from './components/Home/Footer';
import Contact from './components/Home/Contact';
import InternshipDetail from './components/Home/InternshipDetail';


function App() {
  return (
    <>
      <Router>
        <div className="main" style={{ backgroundColor: '#DBDFEA' , margin:0,padding:0  }}>
        <Navbar />
          <Routes>
          
            <Route exact path="/" element={<Home />} />

            <Route exact path="/internship" element={<Internship/>} />

            <Route exact path="/internship_Details" element={<InternshipDetail/>} />

            <Route exact path="/about" element={<AboutUs/>} />

            <Route exact path="/contactus" element={<Contact/>} />

            {/* <Route exact path="/login" element={<LoginScreen />} /> */}

            {/* <Route exact path="/register" element={<RegisterScreen />} /> */}

        {/* <Route exact path="/forgotpassword" element={<ForgotPasswordScreen />} /> */}

            {/* <Route exact path="/resetpassword" element={<ResetPasswordScreen />} /> */}

          </Routes>
        </div>

      </Router>

      <Footer/>
    

      

    </>
  );
}

export default App;
