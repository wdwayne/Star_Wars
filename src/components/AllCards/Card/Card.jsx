import Homeworld from './Homeworld/homeworld'
import Species from './Species/Species'
import "./style.css";
import { ReactComponent as Cards } from "../../../Assets/Card.svg";
import { ReactComponent as Male } from "../../../Assets/Gender-Male.svg";
import { ReactComponent as Female } from "../../../Assets/Gender-Female.svg";
import { ReactComponent as Starship } from "../../../Assets/Starship.svg";
import { ReactComponent as Vehicle } from "../../../Assets/Vehicle.svg";
import { useHistory } from "react-router-dom";

function Card({ person, setCurrentPerson }) {
  
  const history = useHistory();

  

  return (
    <div
      className="col"
      onClick={() => {
        setCurrentPerson(person);
        history.push(`/cardDetails/${person.name}`);
      }}
    >
      <div className="nameContainer">
        <span>
          <Cards />
        </span>
        <h3>{person.name}</h3>
      </div>
      <div className="cardBody">
        <div className="birthInfo flex">
          <p>
            {person.gender === "male" ? <Male /> : <Female />}{" "}
            {person.birth_year}
          </p>
          <Species specie={person.species[0]} />
        </div>
        <div className="cardItem flex">
          <Homeworld planet={person.homeworld} />
        </div>
        <div className="cardItem flex">
          <p className="title">
            <Vehicle /> Vehicle
          </p>
          <p>{person.vehicles.length}</p>
        </div>
        <div className="cardItem flex">
          <p className="title">
            <Starship /> Starships
          </p>
          <p>{person.starships.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
