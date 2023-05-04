import React from 'react';
import Header from "../components/Header";
import GetStartedPage from "../components/GetStartedPage";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <main>
                <GetStartedPage/>
            </main>
        </div>
    );
};

export default MainPage;