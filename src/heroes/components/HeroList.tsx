import { getHeroesByPublisher } from "../helpers";
import { Hero } from "../interfaces";
import { HeroCards } from "../components";
interface HeroListProps{
  publisher: string;
}
export const HeroList = ({publisher}: HeroListProps) => {

  const heroes: Hero[] = getHeroesByPublisher(publisher);

  return (
   <div className="row row-cols-1 row-cols-md-3">
      {
      heroes.map(hero=>(
      <HeroCards key={hero.id}{...hero}/>))
      
      }
   </div>
  )
  }
