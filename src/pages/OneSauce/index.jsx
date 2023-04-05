import { useContext } from "react"
import { UserContext } from "../../utils/context/userContext"
import { dataSauces } from "../../data/Sauces/dataSauces"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons"
function OneSauce() {
    const url = window.location.pathname
    const sauceId = url.slice(7)
    const data = dataSauces[sauceId]
    const isThereComments = data.comments.length === 0 ? false : true

    const {toggleModals} = useContext(UserContext)
    return(
        <main
            className="oneSauceWrapper" 
            onClick={() => {
            toggleModals("close")
        }}
        >
            <img src={data.imageUrl} alt={`${data.name}-${data.mainPepper}`} className="imageSauceWrapper" />
            <section className="sauceText">
                <h1>{data.name}</h1>
                <p>{data.manufacturer}</p>
                <p>{data.mainPepper}</p>
                <p>{data.heat}</p>

                <div className="allThumbWrapper">
                    <div className="oneThumbWraper thumbUp">
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <p>{data.likes}</p>
                    </div>
                    <div className="oneThumbWraper thumbDown">
                        <FontAwesomeIcon icon={faThumbsDown} />
                        <p>{data.dislikes}</p>
                    </div>
                </div>

                <div className="allComments">
                    {isThereComments ? ( 
                        <div className="allCommentsWrapper">
                            {data.comments?.map((comment, index) =>
                            <div className="oneCommentWrapper" key={`${comment.name}-${index}`}>
                                <p><br>{comment.name}</br>: {comment.description}</p>
                            </div>
                        )}
                        </div>  
                    ) : (
                        <div className="noComments">
                            <p>Il n'y a pas de commentaire pour le moment</p>
                        </div>
                    )}
                </div>

                            </section>
        </main>
    )
}

export default OneSauce 