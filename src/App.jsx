import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import "./index.css";
import Instruction from "./components/Instruction";
import Test from "./components/Test";
import Remedies from "./components/Remedies";
import AudioTherapy from "./components/AudioTherapy";
import ReadingTherapy from "./components/ReadingTherapy";
import YogaTherapy from "./components/YogaTherapy";
import ConsultDoctor from "./components/ConsultDoctor";
import HeartInstruction from "./components/HeartInstruction";
import CheckStress from "./components/CheckStress";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);//make it false
  useEffect(() => {
    axios.get("https://mindmetrics-backend.vercel.app/auth/session", { withCredentials: true })
      .then((res) => {
        setIsAuthenticated(res.data.authenticated);
      })
      .catch(() => {
        setIsAuthenticated(false);//make it false
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Preloader onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
          <Navbar isAuth={isAuthenticated}/>
          <div className="flex-grow pt-16 bg-gradient-to-br from-gray-900 to-black"> 
            <Routes>
         
              <Route path="/about" element={<About />} />
              <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <SignUp />} />
            <Route path="/sign" element={<SignUp />} />
            <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
            <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
            <Route path="/instructions" element={<Instruction />} />
            <Route path="/test" element={<Test />} />
            <Route path='/remedies' element={<Remedies />} />
            <Route path="/audio" element={<AudioTherapy/>} />
            <Route path="/read" element={<ReadingTherapy />} />
            <Route path="/yoga" element={<YogaTherapy />} />
            <Route path="/doctor" element={<ConsultDoctor />} />
            <Route path="/heart-instruction" element={<HeartInstruction />} />
            <Route path="/check-stress" element={<CheckStress />} />
            </Routes>
          </div>
          <Footer />
        </Router>
    </div>
  );
};

export default App;
