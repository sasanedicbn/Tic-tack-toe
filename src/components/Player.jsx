import { useState } from "react";

const Player = ({name, symbol}) => {
    const [playerName, setPlayerName] = useState(name)
    const [isEditing, setIsEditing] = useState(false)
    function handleEditClick () {
        setIsEditing((editing) => !editing)
    }
    function handleChange (event) {
    setPlayerName(event.target.value)
    }
    return(
        <li>
            <span className="player">
             {isEditing ? <input type="text" required value={playerName} onChange={handleChange}/> : <span className="player-name">{name}</span>}
             <span className="player-symbol">{symbol}</span>
            </span>
          <button onClick={handleEditClick}>Edit</button>
          </li>
    )
}
export default Player;