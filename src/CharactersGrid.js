import React from 'react';
import "./CharactersGrid.css";
import CharacterItem from "./CharacterItem";

const CharactersGrid = ({ characters }) => {
    return (
        <div className="character-grid">
            {
                characters.map(character => (
                    <CharacterItem key={character.char_id} character={character} />
                ))
            }
        </div>
    )
}

export default CharactersGrid;
