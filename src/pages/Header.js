import React from "react";
import logo from '../assets/images/alerrian-icon.jpg';
import '../assets/css/Header.scss';

export default function Header() {
    return (
        <header className="about-header">
            <div className="about-header-container">
                <a href="/" className="brand-link">
                    <img src={logo} alt="Brand Logo" className="brand-logo" />
                    <span className="brand-text">Steven Anderson</span>
                </a>
            </div>
        </header>
    );
}