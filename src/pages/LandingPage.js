import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LandingHeader from "../components/Landing-header";
import "./LandingPage.css";

const LandingPage = () => {
  //   const navigate = useNavigate();

  
  // const isLoggedIn = false; 
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate("/home"); 
  //   }
  // }, [isLoggedIn, navigate]);
  return (
    <div className="landing-page">
      {/* Navbar */}
      <LandingHeader/>
      {/* <div className="navbar">
        <img
          className="navbar__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <button className="navbar__button">Sign In</button>
      </div> */}

      {/* Hero Section */}
      <section className="hero">
        <div className="image-section">
          <img src="/assets/landing-banner.jpg"/>
        </div>
        <div className="hero__content">
          <h1 className="hero__title">Unlimited movies, TV shows, and more.</h1>
          <p className="hero__subtitle">Watch anywhere. Cancel anytime.</p>
          <p className="hero__description">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div className="hero__input">
            <input type="email" placeholder="Email address" />
            <button>Get Started

        
            </button>
          </div>
        </div>
        <div className="curve-container">
          <div className="curve-wrapper">
            <div className="curve"></div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="features">
        <div className="feature">
          <h2>Enjoy on your TV.</h2>
          <p>Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="TV" />
        </div>

        <div className="feature">
          <h2>Download your shows to watch offline.</h2>
          <p>Save your favorites easily and always have something to watch.</p>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.jpg" alt="Mobile" />
        </div>

        <div className="feature">
          <h2>Watch everywhere.</h2>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="Devices" />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>Questions? Contact us.</p>
        <div className="footer__links">
          <a href="#">FAQ</a>
          <a href="#">Help Center</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
