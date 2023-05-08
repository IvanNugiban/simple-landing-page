import React from "react";
import Container from "../ui/Container";
import SecondaryLogoImage from "../assets/SecondaryLogo.png";
import InstagramLogo from "../assets/InstagramLogo.png";
import DribbleLogo from "../assets/DribbleLogo.png";
import TwitterLogo from "../assets/TwitterLogo.png";
import YoutubeLogo from "../assets/YoutubeLogo.png";


import { Link } from "react-router-dom";

const Footer = () => {

return (
    <footer className="bg-main">
        <Container>
            <div className="flex justify-between flex-wrap pt-16 gap-y-7">
                <span className="flex items-center gap-3 mr-6">
                    <img src={SecondaryLogoImage} alt="Lawliet logo"/>
                    <h5 className="text-white text-2xl font-poppins font-bold">Lawliet</h5>
                </span>

                <ul className="flex flex-wrap gap-16">
                    <li className="flex flex-col">
                        <h6 className="font-inter font-medium text-gray-100 text-lg">Product</h6>
                        
                        <div className="flex flex-col gap-3 font-inter text-md text-gray-100 mt-8">
                        <Link to="overview">Overview</Link>
                        <Link to="features">Features</Link>
                        <Link to="tutorials">Tutorials</Link>
                        <Link to="pricing">Pricing</Link>
                        <Link to="releases">Releases</Link>
                        </div>
                    </li>

                    <li className="flex flex-col">
                        <h6 className="font-inter font-medium text-gray-100 text-lg">Company</h6>
                        
                        <div className="flex flex-col gap-3 font-inter text-md text-gray-100 mt-8">
                        <Link to="about">About</Link>
                        <Link to="press">Press</Link>
                        <Link to="careers">Careers</Link>
                        <Link to="contact">Contact</Link>
                        <Link to="partners">Partners</Link>
                        </div>
                    </li>

                    <li className="flex flex-col">
                        <h6 className="font-inter font-medium text-gray-100 text-lg">Support</h6>
                        
                        <div className="flex flex-col gap-3 font-inter text-md text-gray-100 mt-8">
                        <Link to="help">Help Center</Link>
                        <Link to="terms">Terms of service</Link>
                        <Link to="legal">Legal</Link>
                        <Link to="policy">Privacy Policy</Link>
                        <Link to="status">Status</Link>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="flex justify-between flex-wrap py-6 mt-20 gap-5">

                <p className="text-gray-100 font-inter">© 2021 Lawliet. All rights reserved</p>

                <ul className="flex gap-2">
                    <li><a href="instagram.com"><img src={InstagramLogo} alt="Instagram"/></a></li>
                    <li><a href="dribble.com"><img src={DribbleLogo} alt="Dribble"/></a></li>
                    <li><a href="twitter.com"><img src={TwitterLogo} alt="Twitter"/></a></li>
                    <li><a href="youtube.com"><img src={YoutubeLogo} alt="YoutubeLogo"/></a></li>
                </ul>
            </div>
        </Container>
    </footer>
)

}

export default Footer;