import Hero from "./components/Hero";
import Layout from "./components/Layout";
import ShortLinkSection from "./components/ShortLinkSection";
import FeaturesSection from "./components/FeaturesSection";
import GetStartedSection from "./components/GetStartedSection";

const App = () => {
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
