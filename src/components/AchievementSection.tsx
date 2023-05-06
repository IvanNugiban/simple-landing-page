import React, {useRef} from 'react';
import Container from "../ui/Container";
import AchievementsBackground from "../assets/AchievementsBackground.png";
import useAppearAnimation from "../hooks/useAppearAnimation";

const AchievementSection = () => {

    const ref = useRef(null);

    useAppearAnimation(ref);

    return (
        <section  style={{backgroundImage: `url(${AchievementsBackground})`}} className="bg-cover ">
            <Container>
                <div ref={ref}  className="text-center py-14 md:py-28">
                    <h3 className="text-white text-5xl font-playfair font-black">Some count that matters</h3>
                    <p className="text-white font-poppins text-lg mt-3">Our achievement in the journey depicted in numbers</p>

                    <ul className="flex justify-center flex-col md:flex-row gap-12 md:gap-28 mt-14">
                        <li className="text-white  flex-col gap-3 font-poppins font-extrabold">
                            <h4 className="text-6xl ">30</h4>
                            <p className="text-lg">Clients</p>
                        </li>

                        <li className="text-white flex flex-col gap-3 font-poppins font-extrabold border-y-2 md:border-x-2 md:border-y-0 border-stone-100 py-10 md:px-10 md:py-0 border-opacity-40	">
                            <h4 className="text-6xl ">300+</h4>
                            <p className="text-lg">Taken business legalities</p>
                        </li>

                        <li className="text-white flex flex-col gap-3 font-poppins font-extrabold">
                            <h4 className="text-6xl ">8</h4>
                            <p className="text-lg">Years of Journey</p>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default AchievementSection;