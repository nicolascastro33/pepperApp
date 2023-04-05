import { createContext, useState, useEffect } from "react";

export const UserContext = createContext()

export function UserContextProvider(props){

    const [modalState, setModalState] = useState(false)
    const toggleModals = modal => {
        if(modal === "identification"){
            setModalState(true)
        }
        if(modal === "close"){
            setModalState(false)
        }
    }
    return(
        <UserContext.Provider value={{modalState, toggleModals}}>
            {props.children}
        </UserContext.Provider>
    )
}

