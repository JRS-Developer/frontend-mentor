import { HiMoon } from "react-icons/hi";

const ToogleDarkMode = () => {
    const changeTheme = () => {
        const isDarkMode = document.documentElement.classList.contains("dark");
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    };
    return (
        <div className="flex ml-auto items-center gap-1 cursor-pointer " onClick={changeTheme}>
            <HiMoon />
            <p className="text-sm">Dark Mode</p>
        </div>
    );
};

export default ToogleDarkMode;
