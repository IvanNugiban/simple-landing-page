import React, {useRef} from 'react';
import useAppearAnimation from "../hooks/useAppearAnimation";
import Container from "../ui/Container";
import Card from "../ui/Card";
import UserArrowsImage from "../assets/UserArrows.png";
import CircleLayerImage from "../assets/CircleLayer.png";
import BagImage from "../assets/Bag.png";
import RocketImage from "../assets/Rocket.png";

const LegalizationSection = () => {

    const ref = useRef(null);

    useAppearAnimation(ref);

    return (
        <section className="bg-blue-50 py-16 sm:py-32" ref={ref}>
            <Container>
                <div className="flex flex-col 2xl:flex-row items-center">
                    <div className="max-w-2xl text-center mb-20 2xl:mr-28 2xl:mb-0 2xl:text-start">
                        <h2 className="font-playfair bold text-4xl sm:text-6xl leading-normal mb-8">Why do we help with legalization?</h2>
                        <p className="font-poppins text-xl tracking-wide text-gray-400">We are here for UMKM in Indonesia to carry out the legalization process, which is sometimes complicated.</p>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-9 grid-flow-row">
                        <li><Card logo={CircleLayerImage} title="Enviromental Law" text="Environmental legal issues might occur since the planned business activities are designed"/></li>
                        <li><Card logo={BagImage} title="Corporate and Commercial" text="We provide a complete range of services for the continuity of your business activities."/></li>
                        <li><Card logo={RocketImage} title="Information and Technology" text="IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty."/></li>
                        <li><Card logo={UserArrowsImage} title="Other Services" text="In dealing with disruptive economic and legal challenge, our firm also provide various legal services."/></li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default LegalizationSection;