import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function Mani() {
  const [bgColor,setBgColor] = useState('')
const [darkMode, setDarkMode] = useState(false)
const [val,setVal]=useState()


  const InputBox = (e) => {
    const value = e.target.value
    setBgColor(value);
  }
  useEffect(()=>{
    axios.get('https://api.coinpaprika.com/v1/tickers')
      .then(res => console.log(res.data[0]))
  },[])

  return (
    <div>
      <div>
      <input
        type="text"
        placeholder="Enter color name"
        value={bgColor}
        onChange={InputBox}
        style={{ backgroundColor: bgColor,
          border: '2px solid #333',
          borderRadius: '10px'
        }}
       />
       </div>
       <div style={{ background: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black', height: '100vh' }}>
      <button onClick={() => setDarkMode(!darkMode)}>Change Theme</button>
    </div>
    

    </div>
  )
}
export default Mani
