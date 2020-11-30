import React from 'react';
import "./CharacterItem.css";

const CharacterItem = ({ character }) => {
    return (
        <div className="character-item" style={{ backgroundImage: `url(${character.img})` }}>
            <h3>{`${character.name}`}</h3>
            <h3>{`${character.portrayed}`}</h3>
        </div>
    )
}

export default CharacterItem;
