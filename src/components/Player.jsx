import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let pName = <span className="player-name">{playerName}</span>;
    let buttonValue = "Edit";

    if (isEditing) {
        pName = <input type="text" required value={playerName} onChange={handleChange}></input>
        buttonValue = "Save";
    }

    return (<li className={isActive ? 'active' : undefined}>
        <span className="player">
            {pName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{buttonValue}</button>
    </li>);
}