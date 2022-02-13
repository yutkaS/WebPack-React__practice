import React from "react";

import '/src/components/style-reset.scss';
import './mainPage.scss';
import './assets/main-bg.jpg';

import Header from "../../components/Header/header.jsx";
import MainPageContent from "./components/MainPageContent/mainPageContent.jsx";
import Footer from "../../components/Footer/footer.jsx";

const MainPage = () => (
    <div className={'mainPage'}>
        <Header/>
        <MainPageContent/>
        <Footer/>
    </div>
)

export default MainPage;