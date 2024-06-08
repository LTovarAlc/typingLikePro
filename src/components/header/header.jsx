import "./header.css"

const Header = () => {
    return(
        <header className="header">
            <div className="logo-container">
                <h1>TLICK</h1>
            </div>
            <nav className="menu">
                <ul>
                    <li>Instructions</li>
                    <li>Try minigame</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header