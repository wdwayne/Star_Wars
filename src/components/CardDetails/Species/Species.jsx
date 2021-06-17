import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

function Species ({ specie }) {

    const [species, setSpecies] = useState("");

    useEffect(() => {

        const fetchSpecies = async () => {
            await axios
                .get(specie)
                .then( res => setSpecies(res.data.name))
                .catch( err => console.error(err))
        }
      
        fetchSpecies()
        
        return () => {
          setSpecies("");
        };
      }, [specie]);

    return (
        <p>{species ? species : 'Human'}</p> 
    )
}

export default Species;
