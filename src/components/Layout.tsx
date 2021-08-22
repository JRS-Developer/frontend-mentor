import Navbar from "./Navbar"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="font-sans">
                {children}
            </main>
            <footer></footer>
        </>
    )
}

export default Layout
