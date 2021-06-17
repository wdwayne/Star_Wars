import { ReactComponent as Vehicles } from "../../../Assets/Vehicle.svg";
import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

function Vehicle({ vehicle }) {


  const [item, setItem] = useState("");

  useEffect(() => {
      const fetchHome = async () => {
        await axios
          .get(vehicle)
          .then((res) => setItem(res.data.name))
          .catch((err) => console.error(err));
      };
      fetchHome();
      
      return () => {
        setItem("");
      };
    }, [vehicle]);

  return (
    <div className="cardItem flex">
      <p className="title">
        <Vehicles /> Vehicle
      </p>
      <p>{item}</p>
    </div>
  );
}

export default Vehicle;
