import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { UserContext } from "../../../utils/context/userContext"
import { useContext, useRef, useState } from "react"
import functionSignUp from "../../../utils/function/signUp"


function SignUp(){
    const [validation, setValidation] = useState("")
    const {toggleModals} = useContext(UserContext)
    const inputs = useRef([])
    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }
    
    return (
        <section className="identificationForm">
             <div className="crossAndNameWrapper">
                <h1 className="identificationTitle">Inscription</h1>
                <FontAwesomeIcon icon={faXmark} className="closingLogo" onClick={() =>{
                        toggleModals("close")
                    }}
                />
            </div>
            <form
                onSubmit={functionSignUp(inputs, setValidation)}    
            >
                <div className="formGroup">
                    <label htmlFor="signUpEmail">Email</label>
                    <input  
                        ref={addInputs}
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
                        ref={addInputs}
                        name="password" 
                        type="password" 
                        className="formControl formControlpassword" 
                        id="signUpPwd" 
                        required
                    />
                    <p className="errorFormEmail"></p>
                </div>

                <div className="formGroup">
                    <label htmlFor="repeatPwd">Remettre le mot de passe</label>
                    <input 
                        ref={addInputs}
                        name="password" 
                        type="password" 
                        className="formControl formControlpassword" 
                        id="repeatPwd" 
                        required
                    />
                </div>
                <p className="errorForm">{validation}</p>

                <button>Inscription</button>
            </form>
        </section>
    )
}

export default SignUp