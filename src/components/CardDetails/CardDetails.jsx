import Vehicle from "./Vehicle/Vehicle";
import Starship from "./Starship/Starship";
import Homeworld from "./Homeworld/homeworld";
import Species from './Species/Species'
import "./style.css";
import { ReactComponent as Cards } from "../../Assets/Card.svg";
import { ReactComponent as Male } from "../../Assets/Gender-Male.svg";
import { ReactComponent as Female } from "../../Assets/Gender-Female.svg";
import { useHistory } from "react-router-dom";

function CardDetails({ currentPerson }) {
  const history = useHistory();

  if (!currentPerson) {
    history.push("/");
    return <p>loading...</p>;
  }
  return (
    <div className="colDetails">
      <div className="nameContainer">
        <span>
          <Cards />
        </span>
        <h2>{currentPerson.name}</h2>
      </div>
      <div className="cardBody">
        <div className="birthInfo flex">
          <p>
            {currentPerson.gender === 'male' ? <Male /> : <Female />} {currentPerson.birth_year}
          </p>
          <Species specie={currentPerson.species} />
        </div>
        <div className="cardItem flex">
          <Homeworld planet={currentPerson.homeworld}/>
        </div>
        
          {currentPerson.vehicles.map((vehicle, i) => (
            <Vehicle vehicle={vehicle} key={i} /> 
          ))}
          
          {currentPerson.starships.map((starship, i) => (
            <Starship starship={starship} key={i} />
          ))}
      </div>
    </div>
  );
}

export default CardDetails;
