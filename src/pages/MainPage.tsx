import React from 'react';
import Header from "../components/Header";
import GetStartedSection from "../components/GetStartedSection";
import LegalizationSection from "../components/LegalizationSection";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <main>
                <GetStartedSection/>
                <LegalizationSection/>
            </main>

        </div>
    );
};

export default MainPage;