import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className="flex justify-center items-center flex-col">
        <h1 className={`font-rick text-4xl sm:text-6xl p-3 text-blue-300 ${styles.outlinedHeader}`}>Rick and Morty</h1>
        <h2 className={`font-rick text-3xl sm:text-5xl mt-3 text-blue-300 ${styles.outlinedHeader}`}>Character Wiki</h2>
        {/* <nav>

        </nav> */}
        </header>
    )
}

export default Header;