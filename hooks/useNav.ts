import { useLocalStorage } from "usehooks-ts";

export const useNav = () => {
    const [showNav, setShowNav] = useLocalStorage("flourish-nav", false);
    const toggleNav = () => setShowNav(!showNav);

    return { showNav, setShowNav, toggleNav };
};
