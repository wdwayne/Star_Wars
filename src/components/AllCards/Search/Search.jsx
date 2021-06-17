import { useState } from 'react';
import './style.css'
import { ReactComponent as SearchBtn } from '../../../Assets/Search.svg'

function Search({ setCurrentPerson, currentPerson, setQuery }) {

    const [charName, setCharName] = useState('')

    const handleChange = (q) => {
        setCharName(q);
        setQuery(q)
    }

    return (
        <form>
            <input type="text" placeholder='Search' id="searchBar" onChange={(e) => handleChange(e.target.value)} value={charName} required />
             <button id="searchBtn"><SearchBtn /></button>
        </form>
    )
}

export default Search;
