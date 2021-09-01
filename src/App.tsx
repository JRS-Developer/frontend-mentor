import { useEffect } from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
    const setTheme = () => {
        const theme = localStorage.getItem("theme");
        const containsDark =
            document.documentElement.classList.contains("dark");
        if (theme === "light" && containsDark) {
            document.documentElement.classList.remove("dark");
        } else if (theme === "dark" && !containsDark) {
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    };

    useEffect(() => {
        setTheme();
    }, []);

    return (
        <Layout>
            <Router>
                <Switch>
                    <Route path="/details/:id" component={Details} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </Layout>
    );
};

export default App;
