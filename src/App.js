import { Menu, Breadcrums, AllCards, CardDetails } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [currentPerson, setCurrentPerson] = useState(null);
  const [query, setQuery] = useState('');


  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/?search=${query}`)
      .then((res) => setData(res.data.results))
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <div className="App">
      <Router>
        <Menu />
        <Breadcrums />
        <Switch>
          <Route exact path="/">
            {data && (
              <AllCards data={data} setCurrentPerson={setCurrentPerson} setQuery={setQuery} />
            )}
          </Route>
          <Route exact path="/cardDetails/:name">
            <CardDetails currentPerson={currentPerson} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
