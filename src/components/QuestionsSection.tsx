import React, { useRef } from "react";
import Button from "../ui/Button";
import QuestionsImage from "../assets/QuestionsImage.png";
import Container from "../ui/Container";
import useAppearAnimation from "../hooks/useAppearAnimation";


const QuestionsSection = () => {

    const ref = useRef(null);

    useAppearAnimation(ref);

return (
    <section>
        <Container>
        <div ref={ref} className="flex flex-col lg:flex-row justify-center text-center lg:text-start	lg:justify-between py-20">
            <div className="flex flex-col justify-center lg:justify-start">
                <h3 className="font-playfair font-bold text-gray-800 text-5xl">Complex Questions?</h3>
                <p className="font-poppins text-xl my-10 text-gray-650">Request for a personalized budget for your legal problem. We will<br/> send you a coupe options in 24 hours. You can have free consult ,<br/> if a our first customer</p>
                 <span><Button text="Call now" padding="16px 38px"/></span>
            </div>

            <img className="hidden lg:block" src={QuestionsImage} alt=""/>
        </div>
        </Container>
    </section>
)

}

export default QuestionsSection;