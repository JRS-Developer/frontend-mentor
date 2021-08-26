import Navbar from "./Navbar";
import Logo from '../images/logo.svg'
import FBIcon from '../images/icon-facebook.svg'
import TwitterIcon from '../images/icon-twitter.svg'
import PinIcon from '../images/icon-pinterest.svg'
import InstaIcon from '../images/icon-instagram.svg'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header className="bg-white">
                <Navbar />
            </header>
            <main className="font-sans bg-gray-default min-h-screen bg-opacity-30">
                {children}
            </main>
            <footer className="bg-dark-violet flex flex-col items-center">
                <img alt="logo" src={Logo} className="invert" />
                <div></div>
                <div className="flex gap-4 items-center justify-center">
                    <img src={FBIcon} alt="Facebook Icon" />
                    <img src={TwitterIcon} alt="Twitter Icon" />
                    <img src={PinIcon} alt="Pinterest Icon" />
                    <img src={InstaIcon} alt="Instagram Icon" />
                </div>
            </footer>
        </>
    );
};

export default Layout;
