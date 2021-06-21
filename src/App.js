import { Menu, Breadcrums, AllCards, CardDetails } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [currentPerson, setCurrentPerson] = useState(null);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('')


  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/?search=${query}`)
      .then((res) => setData(res.data.results))
      .catch((err) => setError(err.message));
  }, [query]);

  return (
    <div className="App">
      <Router>
        <Menu />
        <Breadcrums />
        <Switch>
          <Route exact path="/">
              <AllCards data={data} setCurrentPerson={setCurrentPerson} setQuery={setQuery} error={error} />
          </Route>
          <Route exact path="/:name Details">
            <CardDetails currentPerson={currentPerson} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
 
export default App;
