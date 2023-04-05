import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { UserContext } from "../../../utils/context/userContext"
import { useContext } from "react"

function Login(){
    const {toggleModals} = useContext(UserContext)

    return(
        <section className="identificationForm">
            <div className="crossAndNameWrapper">
                <h1 className="identificationTitle">Connection</h1>
                <FontAwesomeIcon icon={faXmark} className="closingLogo" onClick={() =>{
                        toggleModals("close")
                    }}
                />
            </div>
        <form>
            <div className="formGroup">
                <label htmlFor="signUpEmail">Email</label>
                <input  
                    name="email" 
                    type="email" 
                    className="formControl formControlemail" 
                    id="signUpEmail" 
                    required
                />
                <p className="errorFormEmail"></p>
            </div>

            <div className="formGroup">
                <label htmlFor="signUpPwd">Mot de passe</label>
                <input 
                    name="password" 
                    type="password" 
                    className="formControl formControlpassword" 
                    id="signUpPwd" 
                    required
                />
                <p className="errorFormEmail"></p>
            </div>

            <button>Connection</button>
        </form>
    </section>

    )
}

export default Login