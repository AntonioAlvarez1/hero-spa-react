import { Link } from "react-router-dom";
import { Hero } from "../interfaces"

interface CharacterProps{
    alter_ego:string;
    characters:string;
    
}

const CharactersByHero=({alter_ego,characters}:CharacterProps)=>{
    if(alter_ego===characters){return(<></>);
    
    return<p>{characters}</p>   
}
}

export const HeroCards = (hero:Hero) => {
    const heroImageUrl: string = `/assets/heroes/${hero.id}.jpg`;

    return (
      <div className="col animate__animated animate__fadeIn">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img className="card-img" src={heroImageUrl} alt={hero.superhero} />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{hero.superhero}</h5>
                <p className="card-text">{hero.alter_ego}</p>
  
                <CharactersByHero characters={hero.characters} alter_ego={hero.alter_ego}/>
  
                <p className="card-text">
                  <small className="text-muted">{hero.first_appearance}</small>
                </p>
  
                <Link to={`/hero/${hero.id}`}>
                  More...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
