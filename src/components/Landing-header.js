import React from "react";
import "./LandingHeader.css"

export default function LandingHeader(){
    return(
     
        <div className="landing-navbar">
            <div className="landing-main-header">
               
                    <div className="landing-logo">
                        <img
                        className="landing-navbar__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        alt="Netflix Logo"
                        />
                    </div>
                    
                
                <div className="landing-right-nav">
                    <button className="navbar__button">Sign In</button>
                </div>
            </div>
        </div>
    
    );
};