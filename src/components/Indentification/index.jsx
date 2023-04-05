import SignUp from "../auth/SignUp"
import Login from "../auth/Login"
import { useState } from "react"


function Identification() {
    const [whichIdentification, setIdentification] = useState("signUp")
    return(
        <main className="identification">
            <div className="identificationWrapper">
            
                {whichIdentification === "signUp" ? (
                    <SignUp/>
                ) : (
                    <Login/>
                )}

                <div className='buttonsWrapper'>
                    <button className="identificationButton identificationButtonSignUp" onClick={() =>{
                        setIdentification("signUp")
                    }}>
                        Inscription
                    </button>
                    <button className="identificationButton identificationButtonLogin" onClick={() =>{
                        setIdentification("login")
                    }}>
                        Connection
                    </button>
                </div>            
            </div>
        </main>
    )
}

export default Identification 