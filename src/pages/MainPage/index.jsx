import React from "react";

import '/src/components/style-reset.scss'
import './index.scss'

import Header from "../../components/Header/index.jsx";
import MainPageContent from "./components/MainPageContent/index.jsx";
import Footer from "../../components/Footer/index.jsx";

const MainPage = () => (
    <div className={'mainPage'}>
        <Header/>
        <MainPageContent/>
        <Footer/>
    </div>
)

export default MainPage;