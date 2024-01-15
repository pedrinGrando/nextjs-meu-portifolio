import { GitHubIcon } from "../icons/github-icons";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"

export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/pe.grando/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/pedro-aluisio/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/pedrinGrando">
                <GitHubIcon/>
            </a>
            <a href="https://twitter.com/pedroGrand0">
                <TwitterIcon/>
            </a>
        </div>
    )
}