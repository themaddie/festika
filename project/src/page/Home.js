// REACT DEF
import React from 'react';
// COMPONENTS
import Header from '../component/Header';
import Footer from '../component/Footer';
import ContactBox from '../component/ContactBox';
import Slider from '../component/Slider';
import Copyright from '../component/Copyright';
import Festivals from '../component/Festivals';
import Managers from '../component/Managers';
import Intro from '../component/Intro';
import SignUp from '../component/SignUp';
import Statistics from "../component/Statistics";

const Home = () => {
    return (
        <>
            <Header />
            <Slider />
            <Intro />
            <Festivals />
            <SignUp />
            <Managers />
            <Statistics />
            <ContactBox />
            <Footer />
            <Copyright />
        </>
    );
};

export default Home;