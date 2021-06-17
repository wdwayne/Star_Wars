import { Link } from 'react-router-dom'
import './style.css';
import {ReactComponent as Card} from '../../Assets/Card.svg';
import {ReactComponent as Deck} from '../../Assets/Deck.svg';

function Menu() {
    return (
        <header className="menu">
            <div className="menuGroupBtn">
                <Link to="/">
                    <button className="btn btnCards">{<Card />} All Cards</button>
                </Link>
                <button className="btn btnDeck">{<Deck />} Decks</button>
            </div>
            <h1 className="hidden headH1">SW-<span className="headText">API Deck Builder</span></h1>
            <p className="name">Dwayne Williams</p>
        </header>
    )
}

export default Menu;
