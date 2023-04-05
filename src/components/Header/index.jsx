import logo from "../../data/images/chili.png"
import Burger from "../Burger"
import LoadingPage from "../LoadingPage"
import Identification from "../Indentification"
import { UserContext } from "../../utils/context/userContext"
import { useContext } from "react"

function Header() {
    const {modalState} = useContext(UserContext)
    return(
        <header>
            {modalState && (
                <Identification /> 
            )}
           
            <LoadingPage />
            <nav className="navWrapper">
                <a href="/" className="navWrapperLink">
                    <img src={logo} alt="pepper logo" className="navWrapperLinkLogo" />
                </a>
                <Burger/>
            </nav>
        </header>
       
    )
}

export default Header 