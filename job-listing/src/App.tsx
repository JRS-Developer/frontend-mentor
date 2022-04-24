import { AppContextProvider } from "./Context";
import JobListing from "./components/JobListing";
import FilterBar from "./components/FilterBar";
import Layout from "./components/Layout";

function App() {
    return (
        <AppContextProvider>
            <Layout>
                <FilterBar />
                <JobListing />
            </Layout>
        </AppContextProvider>
    );
}

export default App;
