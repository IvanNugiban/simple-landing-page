import React from 'react';
import Container from "../ui/Container";
import Logo from "../assets/Logo.png";
import MagnifyingGlass from "../assets/MagnifyingGlass.png"
import HeaderItem from "../ui/HeaderItem";
import {Link} from "react-router-dom";
import HamburgerMenu from "../ui/HamburgerMenu";



const Header = () => {
    return (
        <div  className="fixed top-0 w-full z-10 bg-white">
            <Container>
                <div className="flex justify-between  py-6 px-5 ">
                    <div className="flex items-center">
                        <img className="mr-4" src={Logo} alt="Lawliet logo"/>
                        <h5 className="text-xl font-poppins font-bold "><Link to="/">Lawliet</Link></h5>
                    </div>

                    <nav className=" hidden sm:flex justify-between items-center">
                        <ul className="flex justify-between mr-2 lg:mr-24">
                            <HeaderItem text={"contact"}/>
                            <HeaderItem text={"testimonials"}/>
                            <HeaderItem text={"about"}/>
                            <HeaderItem text={"terms"}/>
                        </ul>
                        <img className="cursor-pointer" src={MagnifyingGlass} alt="Search"/>
                    </nav>

                    <HamburgerMenu/>

                </div>
            </Container>

        </div>
    );
};

export default Header;