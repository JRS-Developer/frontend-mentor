import Hero from "./components/Hero";
import Layout from "./components/Layout";
import ShortLinkSection from "./components/ShortLinkSection";
import FeaturesSection from "./components/FeaturesSection";
import GetStartedSection from "./components/GetStartedSection";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";


const App = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 600,
            delay: 200
        })
    }, [])

    return (
        <Layout>
            <Hero />
            <ShortLinkSection />
            <FeaturesSection />
            <GetStartedSection />
        </Layout>
    );
}

export default App;
