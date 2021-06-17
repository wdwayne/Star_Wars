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
            setQuery={setQuery}
          />
        ))}
      </div>
    </section>
  );
}

export default AllCards;
