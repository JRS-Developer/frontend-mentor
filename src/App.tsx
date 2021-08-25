import Hero from "./components/Hero";
import Layout from "./components/Layout";
import ShortLinkSection from "./components/ShortLinkSection";

const App = () => {
    return (
        <Layout>
            <Hero />
            <ShortLinkSection />
        </Layout>
    );
};

export default App;
