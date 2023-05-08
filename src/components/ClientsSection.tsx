import React, {useRef} from 'react';
import Container from "../ui/Container";
import MessageCard from "../ui/MessageCard";
import useAppearAnimation from "../hooks/useAppearAnimation";
import UserCard from "../ui/UserCard";
import ClientLogo from "../assets/ClientPhoto.png";

const ClientsSection = () => {

    const ref = useRef(null);

    useAppearAnimation(ref);

    return (
        <section  className="bg-blue-50 py-16 sm:py-20">
            <Container>

                <h3 className="text-center text-gray-800 text-bold font-playfair text-5xl">Clients Testimonial</h3>

                <div ref={ref}  className="flex flex-wrap justify-between items-center mt-16">

                    <div className="inline-flex flex-col items-center gap-6 w-full mb-10 xl:mb-0 xl:w-auto ">

                        <MessageCard title="Incredible Experience" text=
                            "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly."
                        />

                        <UserCard logo={ClientLogo} title="Anya Tailor Joy" text="CEO, SF Industires"/>
                    </div>

                    <div className="inline-flex flex-col items-center gap-6  w-full xl:w-auto">
                        <MessageCard title="Incredible Experience" text=
                            "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly."
                        />

                        <UserCard logo={ClientLogo} title="Sri Alam" text="CEO, Membagongkan GROUP"/>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default ClientsSection;