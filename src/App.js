import CalculatorSection from "./components/CalculatorSection";
import TotalSection from "./components/TotalSection";
import { TipContextProvider } from "./Context";
import LogoSection from "./components/LogoSection";
import "./styles/styles.scss";

function App() {
  return (
    <TipContextProvider>
      <div>
        <LogoSection />
        <CalculatorSection />
        <TotalSection />
      </div>
    </TipContextProvider>
  );
}

export default App;
