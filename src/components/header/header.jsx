import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
    return(
        <header className="header">
                <Link to={"/"}><h1 className="page-name">TapJoy</h1></Link>
        </header>
    )
}

export default Header