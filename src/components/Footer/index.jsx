import logo from "../../data/images/chili.png"
import { useContext } from "react"
import { UserContext } from "../../utils/context/userContext"

function Footer() {

    const {toggleModals} = useContext(UserContext)

    return(
        <footer className="footerWrapper" onClick={() => {
            toggleModals("close")
        }}>
            <img src={logo} alt="Pepper logo" className="footerWrapperLogo" />
            <ul className="footerMedia">
                <a href="/">
                    <li className="footerMediaLogo">Facebook</li>
                </a>
                <a href="/">
                    <li className="footerMediaLogo">Youtube</li>
                </a>
                <a href="/">
                    <li className="footerMediaLogo">Instagram</li>
                </a>
            </ul>
        </footer>
    )
}

export default Footer 