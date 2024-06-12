import { Link } from "react-router-dom"
import "./banner.css"

const Banner = () => {
    return(
        <section className="banner">
            <div className="intro">
                <h1>TapJoy</h1>
                <p>Test your typing skills with us, only if you can.</p>
                <Link to={"/VirtualKeyboard"}><button className="button button-banner">Try it</button></Link>
            </div>
        </section>
    )
}

export default Banner