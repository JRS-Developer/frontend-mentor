import BGHeaderDesktop from "../images/bg-header-desktop.svg";
import BGHeaderMobile from "../images/bg-header-mobile.svg";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header className="bg-primary">
                <img
                    alt="Background"
                    className="w-screen"
                    src={BGHeaderDesktop}
                    srcSet={`${BGHeaderMobile} 600w, ${BGHeaderDesktop} 768w`}
                    sizes={"(max-width: 600px) 600px, 768px"}
                />
            </header>
            <main className="font-sans text-body text-primary font-bold mb-24">
                {children}
            </main>
            <footer className="font-sans">
                <p className="mb-8 text-center mx-8">
                    Challenge by{" "}
                    <a
                        className="text-primary hover:underline font-bold"
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Frontend Mentor
                    </a>
                    .
                    <br />
                    Coded by{" "}
                    <a
                        className="text-primary hover:underline font-bold"
                        href="https://github.com/JRS-Developer/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Jose Sanchez - JRS-Developer
                    </a>
                    .
                </p>
            </footer>
        </>
    );
};

export default Layout;
