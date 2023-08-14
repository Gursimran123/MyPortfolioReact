import "./HeroimgStyles.css";
import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import {Link} from "react-router-dom";

 
 const Heroimg = () => {
   return (
     <div className="hero">
       <div className="mask">
         <img className=" intro-img" src={IntroImg} alt="introImg" />
       </div>
       <div className="content">
         <p>Hi, I'm a Frontend Developer.</p>
         <h1>ReactJs Developer.</h1>
       <div>
         <Link to="/project" className="btn">
           Projects
         </Link>
         <Link to="/contact" className="btn btn-light">
           Contact
         </Link>
       </div>
       </div>
     </div>
   );
 }
 
 export default Heroimg