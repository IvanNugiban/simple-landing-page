import React from 'react';
import Header from "../components/Header";
import GetStartedSection from "../components/GetStartedSection";
import LegalizationSection from "../components/LegalizationSection";
import AchievementSection from "../components/AchievementSection";
import ClientsSection from "../components/ClientsSection";
import QuestionsSection from '../components/QuestionsSection';
import Footer from '../components/Footer';

const MainPage = () => {
    return (
        <>
            <Header/>
            <main>
                <GetStartedSection/>
                <LegalizationSection/>
                <AchievementSection/>
                <ClientsSection/>
                <QuestionsSection/>
            </main>
            <Footer/>
        </>
    );
};

export default MainPage;