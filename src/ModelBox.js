// import React, { useState } from 'react'
// import './ModelBox.css';
// import image from './asset/image.jpeg'
// function ModelBox() {
//     const [Model,setModel]=useState(false)
//   return(
//     <>
//     <div>ModelBox</div>
//     {Model ? <div className='model'>
//         <span>hi hello</span><br/>
//         <button onClick={()=> setModel(false)}>ok</button><br/>

//     </div> :""
//     }
//     <button onClick={()=> setModel(true)}>confirm</button><br/>
//     <div>
//         <button className='x'>x</button>
//         <ima  className='img' src={image} width={"100px"} height={"100px"}></ima>
        
//     </div>

//     </>
//   )
// }

// export default ModelBox

import React, { useState } from 'react'
import './ModelBox.css';
import image from './assets/image.png'  
function ModelBox() {
    const [Model,setModel]=useState(false)
  return(
    <>
    <div className='full'>
      
        <button className='x' >x</button>
      
      <div className='img'>
        <img src={image} width={"400px"} height={"300px"} />
      </div>
      <div className='text'>Secure all your devices </div>
      <div className='text1'>Ensure your mobile,laptop,and other devices are protected online</div>
      
        <button className='pp'>Purchase Premium</button>
      
    </div>

    </>
  )
}

export default ModelBox
