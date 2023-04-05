import { useContext } from "react";
import { UserContext } from "../../utils/context/userContext";
import { dataSauces } from "../../data/Sauces/dataSauces";

function Home() {
  const {toggleModals} = useContext(UserContext)


  if(dataSauces === null){
    return (
      <main className="homeWrapper" onClick={() => {
        toggleModals("close")
      }}>
      <h1>Il n'y a pas de sauce disponible pour le moment</h1>
      </main>
    )
  }

  return (
    <main className="homeWrapper" onClick={() => {
      toggleModals("close")
    }}>
      <section className="allSaucesWrapper">
        {dataSauces?.map((sauce, index) => 
        <a href={`/sauce/${index}`} className="sauceLink">
          <article className="sauceWrapper" key={`${sauce.name}-${index}`}>
            <img src={sauce.imageUrl} alt={`${sauce.name}-${index}`} className="sauceImage" />
            <h2>{sauce.name}</h2>
            <p>{sauce.heat}/10</p>
          </article>
        </a>
      )}
      </section>
      
    </main>
  );
}

export default Home;

