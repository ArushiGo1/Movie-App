import React from "react";
import "./header.css";


const Header = () => {
    return(
        <div className="pinning-header">
            <div className="navbar">
                <div className="main-header">
                    <div className="left-nav">
                        <div className="logo">
                            <img
                            className="navbar__logo"
                            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                            alt="Netflix Logo"
                            />
                        </div>
                        <div className="main-menu">
                            <ul className="tabbed-primary-navigation">
                                
                                <li className="navigation-tab">
                                    <a href="/browse" className="current">Home</a>
                                </li>
                                <li className="navigation-tab">
                                    <a href="/browse/genre/83">TV Shows</a>
                                </li>
                                <li className="navigation-tab">
                                    <a href="/browse/genre/34399">Movies</a>
                                </li>
                                <li className="navigation-tab">
                                    <a href="/latest">New &amp; Popular</a>
                                </li>
                                <li className="navigation-tab">
                                    <a href="/browse/my-list">My List</a>
                                </li>
                                <li className="navigation-tab">
                                    <a href="/browse/original-audio">Browse by Languages</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-nav">
                        {/* <img
                            className="navbar__avatar"
                            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                            alt="User Avatar"
                        /> */}
                        <img classsName="navbar__avatar" src="/assets/avtar.png"/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;