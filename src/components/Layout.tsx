import BGHeaderDesktop from "../images/bg-header-desktop.svg";
import BGHeaderMobile from "../images/bg-header-mobile.svg";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header className="bg-primary">
                <img
                    alt="Background"
                    loading="lazy"
                    className="w-screen"
                    srcSet={`${BGHeaderMobile} 600w, ${BGHeaderDesktop} 768w`}
                />
            </header>
            <main className="font-sans text-body text-primary font-bold mb-24">
                {children}
            </main>
            <footer className="font-sans"></footer>
        </>
    );
};

export default Layout;
