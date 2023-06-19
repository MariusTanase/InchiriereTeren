const Header = () => {
    return (
        <header>
            <div className="header__container-logo">
                <img src="" alt="logo" />
                <h1>LOGO</h1>
            </div>

            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-elements">Home</li>
                    <li className="header__nav-elements">About us</li>
                    <li className="header__nav-elements">Contact us</li>
                </ul>

                <button className="header__nav-button">
                    Login
                </button>
            </nav>
        </header>
    )
}

export default Header