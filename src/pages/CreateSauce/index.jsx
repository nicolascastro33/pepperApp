import { getDataSauce } from "../../utils/function/getDataSauce"
import { UserContext } from "../../utils/context/userContext"
import { useContext } from "react"

function CreateSauce() {
    const {toggleModals} = useContext(UserContext)

    return(
        <main className="createSauceMain" onClick={() => {
            toggleModals("close")
        }}>
            <div className="headerFormSauce">
                <h1>Création de la sauce</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid suscipit eaque 
                    omnis necessitatibus deserunt minus expedita eos, iusto, fugit delectus, dolores voluptate cumque! 
                    Impedit provident quos earum. Magni, quia repudiandae!</p>
            </div>
            <form className="createSauceForm">
                <div className="formSauce">
                    <label htmlFor="name">Nom</label>
                    <input 
                        type="text" 
                        name="name"
                        id="name" 
                        className="formSauceInput formSauceInputName"
                        required
                    />
                </div>
                <div className="formSauce">
                    <label htmlFor="manufactureur">Manufactureur</label>
                    <input 
                        type="text" 
                        name="manufactureur"
                        id="manufactureur" 
                        className="formSauceInput formSauceInputManufactureur"
                        required
                    />
                </div>
                <div className="formSauce">
                    <label htmlFor="description">Description</label>
                    <textarea 
                        name="description"
                        rows="5"
                        id="description" 
                        className="formSauceInput formSauceInputDescription"
                        required
                    />
                </div>
                <div className="formSauce">
                    <label htmlFor="pepper">Main pepper </label>
                    <input 
                        type="text" 
                        name="pepper"
                        id="pepper" 
                        className="formSauceInput formSauceInputPepper"
                        required
                    />
                </div>
                <div className="formSauce">
                    <label htmlFor="heat">Heat</label>
                    <input 
                        type="range"
                        min="1"
                        max="10" 
                        name="heat"
                        id="heat" 
                        className="formSauceInput formSauceInputHeat"
                        required
                    />
                    <p className="errorInput errorInputHeat"></p>
                </div>
                <button className="formSauceButton" onClick={() => {
                            getDataSauce()
                    }
                }>
                    Enregistrer</button>
                <p className="errorSubmit"></p>
            </form>
        </main>
    )
}

export default CreateSauce 