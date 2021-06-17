// import { Link } from "react-router-dom";
import Search from "./Search/Search";
import Card from "./Card/Card";
import "./style.css";

function AllCards({ data, setCurrentPerson, setQuery }) {
  return (
    <section className="allCards">
      <Search setQuery={setQuery} />
      <div className="row">
        {data.map((person) => (
          <Card
            person={person}
            key={person.name}
            setCurrentPerson={setCurrentPerson}
          />
        ))}
      </div>
    </section>
  );
}

export default AllCards;
