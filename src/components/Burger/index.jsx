import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../utils/context/userContext'
import { useContext } from 'react'

function Burger(){
    const {toggleModals} = useContext(UserContext)

    return(
            <button type="submit" className="burger" onClick={() =>
                toggleModals("identification")
            }>
                <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} />
            </button>      
    )
}

export default Burger