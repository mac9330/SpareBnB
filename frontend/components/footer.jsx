import React from "react"
import {Link} from "react-router-dom"

class Footer extends React.Component {


    render() {
        return(
            <div className="footer" id="footer">
                <div className="footer-my-links">
                    <h3>My Links</h3>
                    <a href="https://github.com/mac9330">Github</a>
                    <a href="https://www.linkedin.com/in/mackenzie-young-296787189/">LinkedIn</a>
                    <a href="https://mac9330.github.io/">My Site</a>
                </div>

                <div className="footer-languages">
                    <h3>Languages</h3>
                    <a href="https://guides.rubyonrails.org/">Rails</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>
                </div>
            </div>
        )
    }
}

export default Footer;