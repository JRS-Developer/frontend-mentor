import BGHeader from "../images/bg-header-desktop.svg";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<header>
				<img src={BGHeader} alt="Background" loading="lazy" />
			</header>
			<main>{children}</main>
			<footer></footer>
		</>
	);
};

export default Layout;
