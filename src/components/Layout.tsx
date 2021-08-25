import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header className="bg-white">
                <Navbar />
            </header>
            <main className="font-sans bg-gray-default min-h-screen bg-opacity-30">
                {children}
            </main>
            <footer></footer>
        </>
    );
};

export default Layout;
