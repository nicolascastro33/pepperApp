import logo from "../../data/images/chili.png"

function LoadingPage(){
    let hasAlreadyBeenVisited = localStorage.getItem("beenVisited")
    if(hasAlreadyBeenVisited !== "true"){
        localStorage.setItem("beenVisited", true)
        return (
            <div className="container spinner">
                <img src={logo} className="containerLogo" alt="Logo"/>
            </div>
        ) 
    }
    return
}

export default LoadingPage