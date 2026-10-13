import React, { useState } from "react";
import "./Climate.css";

function ClimateController() {


  const [climate, setClimate] = useState({
    roomName: "Living Room",
    temp: 24,
    isEcoMode: true
  })


  const { roomName, temp, isEcoMode } = climate;
  const handleTempChange = (e) => {
    setClimate({
      ...climate,
      temp: Number(e.target.value)
    })
  }
  const toggleEcoMode = () => {
    setClimate({
      ...climate,
      isEcoMode: !isEcoMode
    })
  }
  const getTempStatus = () => {
    if (temp < 18) return "Cold ❄️";
    else if (temp <= 26) return "Warm 🌤️";
    else return "Hot 🔥";
  }
  return (
    <div className="container">
      <h2>{roomName}</h2>
      <p>Temperature: {temp}°C</p>
      <input
        type="range"
        min="10"
        max="40"
        value={temp}
        onChange={handleTempChange}
      />
      <button onClick={toggleEcoMode}>
        Eco Mode: {isEcoMode ? "ON " : "OFF"}
      </button>
      <span className="status">{getTempStatus()}</span>
      {temp > 30 && (
        <p className="warning">Warning: High Temp!</p>
      )}

    </div>
  )
}

export default ClimateController;