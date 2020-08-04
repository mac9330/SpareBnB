import React from "react"
import {Link} from "react-router-dom"

class Footer extends React.Component {
    


    render() {
        debugger
        return this.props.location.pathname === "/spots/" ? null : (
            <div className="footer">
                <div className="footer-my-links">
                    <h3>My Links</h3>
                    <Link to="/">Github</Link>
                    <Link to="/">LinkedIn</Link>
                    <Link to="/">My Site</Link>
                </div>

                <div className="footer-languages">
                    <h3>Languages</h3>
                    <Link to="/">Rails</Link>
                    <Link to="/">JavaScript</Link>
                    <Link to="/">CSS</Link>
                </div>
            </div>
        )
    }
}

export default Footer;