import { useState } from 'react'



const Player = ({initialname, symbol, isActive}) => {

    const [isEditing, seIsEditing] = useState(false)

     const handleEditing = () => {
        seIsEditing((editing) =>!editing)
     }
     const[playerName, setPlayerName] = useState(initialname)
     

     const handleChange = (e) => {
       setPlayerName(e.target.value)
     }

     
  return (
    <li className={isActive ? 'active' : undefined  }>
            <span className="player">
               {!isEditing ? (<span className="player-name">{playerName}</span>)
               : (
                <input
                 type='text'
                 onChange={handleChange}
                />
               )}
               <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{isEditing ? 'save' : 'Edit'}</button>            
    </li>
  )
}

export default Player