import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if(isEditing) {
      onChangeName(symbol, playerName)
    }
  }

  let editPlayerName = <span className="player-name">{playerName}</span>;
  
  let buttonCaption = "Edit";
  if (isEditing) {
    editPlayerName = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
    buttonCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}
 