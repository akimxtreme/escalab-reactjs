import React, { useEffect, useState } from "react";
import './list-characters.styles.scss';
import logo  from '../../assets/favicon.png';
import { getCharacters } from '../../constants/index';

const ListCharacters = () => {
    useEffect(() => Characters(), []);
    const [characters, setCharacters] = useState([]);
    const Characters = () => {
        fetch(getCharacters)
        .then(res => res.json())
        .then(data => {
            console.log(data.results);
            setCharacters(data.results);
        })
        .catch(err => console.log(err));
    };



    return (
        <div className="characters">
        {characters.map(character => (
            <div className="character" key={`character-${character.id}`}>
                <img src={character.img} alt={character.name} />
                <div className="info">
                    <img src={logo} alt={character.name} />
                    <h2>{ (character.alias === '' ? character.name : character.alias) }</h2>
                    <p><b>Name</b></p>
                    <p>{character.name}</p>
                    <p><b>Ability</b></p>
                    <p>{ (Array.isArray(character.powers) ? character.powers[0] : (character.powers === '' ? 'without power' : character.powers )) }</p>
                </div>
            </div>
        ))}
        </div>
    );
};

export default ListCharacters;