import { TipContextProvider } from "./Context";
import LogoSection from "./components/LogoSection";
import "./styles/styles.scss";
import Calculator from "./components/Calculator";
import Attribution from "./components/Attribution";

function App() {
    return (
        <TipContextProvider>
            <main className="main">
                <LogoSection />
                <Calculator />
                <Attribution />
            </main>
        </TipContextProvider>
    );
}

export default App;
