import React from 'react';
import Container from "../ui/Container";
import Button from "../ui/Button";
import AirbnbLogo from "../assets/airbnb.png";
import HubspotLogo from "../assets/hubspot.png";
import MicrosoftLogo from "../assets/microsoft.png";
import GoogleLogo from "../assets/google.png";
import HeroImage from "../assets/hero.png";

const GetStartedPage = () => {
    return (
        <section className="relative">
            <Container>
                    <div className="inline-flex flex-col mt-40 mb-10 2xl:mb-32 text-center 2xl:text-start w-full 2xl:w-auto items-center justify-center 2xl:items-start 2xl:justify-start">
                        <div className="inline-flex flex-col sm:flex-row  items-center bg-blue-100 py-1.5 px-1 border rounded-3xl">
                            <Button text="New"  padding={"6px 30px"} borderRadius="26.5px"/>
                            <p className="ml-2 mt-2 sm:mt-0 font-plus-jakarta-sans text-main">Stay connected to the upcoming & Recent jobs</p>
                        </div>

                        <h1 className="text-main font-playfair text-6xl sm:text-8xl  font-bold leading-snug my-5">Your Solution <br/>
                            Legal Consultacy</h1>

                        <p className="font-plus-jakarta-sans text-gray-800 text-2xl mb-10">We are here to help you take care of your legality<br/> with the best service especially for you.</p>

                        <Button text="GET STARTED" padding="29px 36px"/>

                        <h6 className="text-gray-400 font-plus-jakarta-sans text-2xl mt-12 sm:mt-24 mb-10">Trusted by 10+ companies in indonesia</h6>

                        <div className="grid grid-cols-2 gap-10 max-w-xs">
                            <img alt="Airbnb" src={AirbnbLogo}/>
                            <img alt="Hubspot" src={HubspotLogo}/>
                            <img alt="Microsoft" src={MicrosoftLogo}/>
                            <img alt="Google" src={GoogleLogo}/>
                        </div>
                    </div>
            </Container>

            <div className="absolute right-1 top-10 hidden 2xl:block">
             <img src={HeroImage} alt=""/>
                <div className="absolute translate-x-1/3 bottom-0 bg-white z-10 py-7 p-36 rounded-lg text-center shadow-2xl">
                    <h4 className=" text-gray-600 font-plus-jakarta-sans text-2xl font-bold ">Tiara Andini</h4>
                    <p className="text-gray-400 font-plus-jakarta-sans font-medium mt-2">-Lawyer</p>
                </div>
            </div>
        </section>
    );
};

export default GetStartedPage;