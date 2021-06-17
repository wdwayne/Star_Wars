import { ReactComponent as Starships } from "../../../Assets/Starship.svg";
import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

function Starship({ starship }) {

  const [item, setItem] = useState("");

  useEffect(() => {
      const fetchHome = async () => {
        await axios
          .get(starship)
          .then((res) => setItem(res.data.name))
          .catch((err) => console.error(err));
      };
      fetchHome();
      
      return () => {
        setItem("");
      };
    }, [starship]);

  return (
    <div className="cardItem flex">
      <p className="title">
        <Starships /> Starships
      </p>
      <p>{item}</p>
    </div>
  );
}

export default Starship;
