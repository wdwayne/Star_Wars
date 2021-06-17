import React from 'react'
import { ReactComponent as HomeWorld } from "../../../../Assets/Homeworld.svg";
import axios from "axios";
import { useEffect, useState } from "react";

function Homeworld({ planet }) {

    const [home, setHome] = useState("");

    useEffect(() => {
        const fetchHome = async () => {
          await axios
            .get(planet)
            .then((res) => setHome(res.data.name))
            .catch((err) => console.error(err));
        };
        fetchHome();
        
        return () => {
          setHome("");
        };
      }, [planet]);

    return (
        <>
        <p className="title">
            <HomeWorld /> Homeworld:
          </p>
          <p>{home}</p>
        </>
    )
}

export default Homeworld;
