import React from 'react';
import Header from "../components/Header";
import GetStartedSection from "../components/GetStartedSection";
import LegalizationSection from "../components/LegalizationSection";
import AchievementSection from "../components/AchievementSection";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <main>
                <GetStartedSection/>
                <LegalizationSection/>
                <AchievementSection/>
            </main>

        </div>
    );
};

export default MainPage;