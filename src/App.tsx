import { AppContextProvider } from "./Context";
import JobListing from "./components/JobListing";
import FilterBar from "./components/FilterBar";

function App() {
    return (
        <AppContextProvider>
            <FilterBar />
            <JobListing />
        </AppContextProvider>
    );
}

export default App;
