import React from "react";

import stylesReset from '/src/components/style-reset.scss';
import styles from './mainPage.scss';
import './assets/main-bg.jpg';

import Header from "../../components/Header/header.jsx";
import MainPageContent from "./components/MainPageContent/mainPageContent.jsx";
import Footer from "../../components/Footer/footer.jsx";

const MainPage = () => (
    <div className={styles.mainPage}>
        <Header/>
        <MainPageContent/>
        <Footer/>
    </div>
)

export default MainPage;