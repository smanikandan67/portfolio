import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [character, setCharacter] = useState({
    name: "Hero",
    stats: {
      health: 100,
      mana: 50
    }
  })
  const { name, stats } = character;
  const { health, mana } = stats;
  const handleNameChange = (e) => {
    setCharacter({
      ...character,
      name: e.target.value,
      stats: {
        ...character.stats
      }
    })
  }
  const takeDamage = () => {
    setCharacter({
      ...character,
      stats: {
        ...character.stats,
        health: character.stats.health - 15
      }
    })
  }

  return (
    <div className="dashboard">

      <h2>{name}</h2>
      <div className="status-bar">
        <p
          style={{
            color: health < 20 ? "red" : "green"
          }}
        >
          Health: {health}
        </p>

        <p>Mana: {mana}</p>
      </div>
      <div className="controls">

        <input
          type="text"
          placeholder="Enter new name"
          value={name}
          onChange={handleNameChange}
        />

        <button onClick={takeDamage}>
          Take Damage
        </button>

      </div>
    </div>
  )
}

export default Dashboard;