import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Module.css/LandingPage.module.css";

function LandingPage() {
  return (
    <div>
      <div className={s.landingPage}>
        
        <NavLink to="/home" className={s.link}>Let's cook!
          
        </NavLink>
      </div>
    </div>
  );
}

export default LandingPage;
