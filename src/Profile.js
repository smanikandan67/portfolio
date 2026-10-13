import React, { useState } from "react";
import "./Profile.css";

export default function App() {
  const [profile, setProfile] = useState({
    name: "Manikandan",
    email: "mani@test.com",
    settings: {
      theme: "light",
      isPublic: true
    }
  })
  const { name, settings } = profile;
  const { theme, isPublic } = settings;
  const handleNameChange = (e) => {
    setProfile({
      ...profile,
      name: e.target.value
    })
  }
  const switchTheme = () => {
    setProfile({
      ...profile,
      settings: {
        ...profile.settings,
        theme: theme === "light" ? "dark" : "light",
      }
    })
  }

  return (
    <div
      className="container"
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Welcome, {name}!</h1>
      <div className="card">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />

        <button onClick={switchTheme}>Switch theme</button><br/>
        {isPublic && <span className="badge">Public Profile</span>}
      </div>
    </div>
  )
}