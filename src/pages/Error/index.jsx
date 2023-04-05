import logo from "../../data/images/errorLogo.svg"
import { useContext } from "react"
import { UserContext } from "../../utils/context/userContext"

function Error() {
    const {toggleModals} = useContext(UserContext)

    return(
        <main onClick={() =>{
            toggleModals("close")
        }}>
            <div className="errorWrapper">
                <img src={logo} alt="Logo Erreur" className="errorImage" />
                <a href="/" className="errorLink">Revenir au menu principal</a>
            </div>
        </main>
    )
}

export default Error 