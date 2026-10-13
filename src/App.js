// import { useEffect, useState } from 'react';
// import Child from './Child';
// import axios from 'axios';

// function App(){
//     const obj = {
//     name:"mani",
//     age:19,
//     city:"kallakurichy"
//   }
//   const [val,setVal] = useState([])
//   useEffect(()=>{
//    axios.get('http://localhost:8080/')
//       .then(res => setVal(res.data))
//   },[])

//   return(
//     <>  <div style={{border:'1px solid red',width:'1500px',backgroundColor:'green'}}>
//   
//       <Child trail={obj}/>
     
//       https://api.coinpaprika.com/v1/tickers
//     </div>
//     </>
//   )

//   }
//   export default App




// import Arr from './Arr';

// function App() {

//   // const [products, setProducts] = useState([])

//   // useEffect(() => {
//   //   axios.get("http://localhost:8080/")
//   //     .then((res) => {
//   //       setProducts(res.data);
//   //     })
//   // }, [])
//   // const fruit=["apple","orange","banana","cherry"]
//   // fruit.splice(2,2)
//   // console.log()


//   return (
//     // <div className="beauty">
//     //   <h1>New Arrivals: Best Sellers in Beauty</h1>

//     //   <div className="products">
//     //     {products.map((i) => (
//     //       <div className="card">
//     //         <img src={i.thumbnail} alt={i.title} />
//     //         <h4>{i.title}</h4>
//     //         <p className="price">₹{i.price}</p>
//     //         <p>⭐ {i.rating}</p>
//     //         <span className="stock">{i.availabilityStatus}</span>
//     //         <button>Add to Cart</button>
//     //       </div>
//     //     ))}
//     //   </div>
//     // </div>
//     <><Arr />
//     </>
//   )
// }

// export default App


// const App= () => {
//   const [value,setValue] = useState([])

//   useEffect(()=>{
//     axios.get('http://localhost:8080/')
//       .then(res => setValue(res.data))
//   },[])
//   console.log(value)

// return (
//   <div className="App">
    
//    <h2>Card Details</h2>
//     {value.map((m) => (
//        <div className="card">
//         <h2>{m.title}</h2>
//         <p>Priority: {m.details.priority}</p>
//         <p>Completed: {m.details.isCompleted ? "true" : "false"}</p>
//         <button className="button" > mark as done </button>
        
//       </div>
//     ))}
    
//   </div>
//   )
// }
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";
// import {Link,Routes,Route} from 'react-router-dom'
// import About from './About';
// import Contact from './Contact';  
// import Payment from './Payment';  
// import NotFound from './NotFound'; 
// import Home from './Home'; 
// import Data from './Data';

// function App() {
//   return (
//     <div>
//       <nav>
//        <Link to="/">Home</Link><br/>
//        {/* <Link to="/about">About</Link><br/>
//        <Link to="/contact">contact</Link><br/>
//        <Link to="/payment">payment</Link> */}
//       </nav> 
//       <Data/>                                        
//       <Routes>
//         <Route path="/" element={<Home/>}>
//         <Route path="about" element={<About/>}>
//         <Route path="contact/:id" element={<Contact/>}/>
//         <Route path="/data/:id" element={<Data />} />
//         </Route>
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App
// import React, { useEffect, useState } from "react";
// import "./App.css";

// const TaskTracker = () => {
//   const [tasks, setTasks] = useState([
//     { id: 101, title: "Complete Assessment", details: { priority: "High", isCompleted: false } },
//     { id: 103, title: "Complete projects", details: { priority: "High", isCompleted: true } }
//   ]);

//   useEffect(() => {
  
//     fetch("http://localhost:8080/")
//       .then(response => response.json())
//       .then(data => setTasks(data))
//   }, [])

//   const handleTitleChange = (id, newTitle) => {
//     setTasks(tasks.map(task => 
//       task.id === id ? { ...task, title: newTitle } : task
//     ));
//   };

//   const toggleComplete = (id) => {
//     setTasks(tasks.map(task => 
//       task.id === id ? { ...task, details: { ...task.details, isCompleted: true } } : task
//     ));
//   };

//   return (
//     <div className="container">
//       {tasks.map((task) => {
      
//         const { title, details: { priority, isCompleted } } = task
//         return (
//           <div 
//             key={task.id} 
//             className="task-card" 
//             style={{ backgroundColor: isCompleted ? "#d4edda" : "#fff3cd" }}>
//             <h2>Task: {title}</h2>
//             {priority === "High" && <span className="badge">URGENT!</span>}

//             <div className="controls">
//               <input 
//                 type="text" 
//                 value={title} 
//                 onChange={(e) => handleTitleChange(task.id, e.target.value)} 
//                 placeholder="Update title"
//               />
//               <button onClick={() => toggleComplete(task.id)} disabled={isCompleted}>
//                 {isCompleted ? "Completed" : "Mark as Done"}
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default TaskTracker;
// import React, { useState, useEffect } from 'react';
// import './App.css'

// function App() {
//   const [cart, setCart] = useState([]);

 
//   useEffect(() => {
//     fetch('http://localhost:8080')
//       .then(res => res.json())
//       .then(data => setCart(data));
//   }, []);

//   const addItem = () => {
//     const newItem = { id: 4, name: "USB Cable", price: 400, inStock: true };
//     setCart([...cart, newItem]); 
//   };

//   const filterStock = () => {
//     setCart(cart.filter(item => item.inStock)); 
//   };

//   return (
//     <div className="cart">/
//     <div className="cart-card">
//       <h1>Shopping Cart</h1>
//       {cart.map(({ name, price, id }) => (
//         <div className='item' key={id}>{name}: ${price}</div>
//       ))}
      
//      <div className='buttons'>
//       <button onClick={addItem}>Add USB Cable</button>
//       <button onClick={filterStock}>Remove Out of Stock</button>
//     </div>
//     </div>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [movieList,setMovieList] = useState([]);
//   const [Movie, setMovie] = useState(null)
//   useEffect(() => {
//     axios.get("http://localhost:5001/api/movies")
//       .then((res) => {
//         setMovieList(res.data)
//       })
//   }, [])
//   const MovieDetails = (id) => {
//     axios.get(`http://localhost:5001/api/movies/${id}`)
//       .then((res) => {
//         setMovie(res.data)
//       })
//   }
//   return (
//     <div >
//       <h1>Movie List</h1>
//       {movieList.map((movie) => (
//         <div>
//           <button onClick={() => MovieDetails(movie.id)}> {movie.title} </button>
//         </div>
//       ))}
//       {Movie && (
//         <div>
//           <h3>Movie Details</h3>
//           <p>Title: {Movie.title}</p>
//           <p>Director: {Movie.director}</p>
//           <p>Year: {Movie.year}</p>
//         </div>
//       )}

//     </div>
//   )
// }
// export default App

// import React from 'react'; 
// import ObjectEx from './ObjectEx';
// import UseEffectEx from './UseEffectEx';
// import Accordion1 from './Accordion1';
// import Project from './Project';
// import Accordion from './Accordion';
// import ModelBox from './ModelBox';
// import Spread from "./Spread";
// import Mani from "./Mani"
// import  ErrorHandling  from "./ErrorHandling";
// import Shoe from './Shoe';
// // function App() {
// //   const obj={
// //     name:"mani",
// //     year:2007
// //   }
//   return (
//     <div>
    
//       {/* <ErrorHandling data={obj}/> */}
//       <Shoe/>
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';
// // import './App.css';
// import axios from 'axios';
// import { useState } from "react";
// import images from './asset/pres.webp'

// import Header from './Header'
// import ArrowFunction from './ArrowFunction';
// import ObjectExample from './ObjectExample'
// import Project from './Project'
// import Accordion from './Accordion';
// import ModalBox from './ModalBox';
// import ObjectDemo from './ObjectDemo';
// import ErrorHandling from './ErrorHandling';
// import Product from './Product';
// import Shoe from './Shoe';
// import { Home1 } from './Home1';
// import shoe from './assets/shoes.webp'
// import shoe1 from './assets/shoes1.webp'
// import shoe2 from './assets/shoes2.webp'
// import socks from './assets/socks.avif'
// import socks1 from './assets/socks1.jpg'
// import socks2 from './assets/socks2.jpg'
// import { Link, Route,Routes } from 'react-router-dom';
// function App() {
//   const productObj = [{
//     name: "Adidas",
//     price: "3000",
//     strikePrice: "5000",
//     image: shoe
//   },
//   {
//     name: "Puma",
//     price: "2500",
//     strikePrice: "3500",
//     image: shoe1
//   },
//   {
//     name: "Nike",
//     price: "4000",
//     strikePrice: "6000",
//     image: shoe2
//   }]
//   const productSocks = [{
//     name: "Cotton SOCKS",
//     price: "100",
//     strikePrice: "150",
//     image: socks
//   },
//   {
//     name: "LINEN",
//     price: "200",
//     strikePrice: "250",
//     image: socks1
//   },
//   {
//     name: "VELVET",
//     price: "150",
//     strikePrice: "200",
//     image: socks2
//   }]
//   return (
//     <div className="App">

//       {/* <Header />x */}
//       {/* <ArrowFunction /> */}
//       {/* <ObjectExample /> */}
//       {/* <Project />  */}
//       {/* <Accordion /> */}
//       {/* <ModalBox/> */}
//       {/* <ObjectDemo /> */}
//       {/* <ErrorHandling data={obj} /> */}
//       {/* <Shoe productObj={productObj} />
//       <Shoe productObj={productSOCK} /> */}
//       <center>
//       <Routes>
//         <Route path="/" element={<Home1 />}></Route>
//         <Route path='/product' element={<Shoe productObj={productObj}/>}></Route>
//         <Route path='/Socks' element={<Shoe productObj={productSocks}/>}></Route>

//       </Routes>

//       <Link to='/'>home</Link><br/>
//       <Link to='./product'>product</Link><br/>
//       <Link to='./Socks'>Socks</Link>




// </center>

//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import Mec from './Mec'

// const App = () => {
//   return (
//     <Mec/>
//   )
// }

// export default App
// import React from 'react';
// import {Link,Route,Routes} from 'react-router-dom'
// import Login_task from "./Task/Login_task";
// import Accordion_task from "./Task/Accordion_task";
// import Contact_task from "./Task/Contact_task";
// import Home_task from "./Task/Home_task";
// import Project_task from "./Task/Project_task";
// import Skills_task from "./Task/Skills_task";
// import About_task from './Task/About_task';


// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home_task/>}/>
//         <Route path='/login' element={<Login_task/>}/>
//         <Route path='/contact' element={<Contact_task/>}/>
//         <Route path='/accordion' element={<Accordion_task/>}/>
//         <Route path='/skills' element={<Skills_task/>}/>
//         <Route path='/projects' element={<Project_task/>}/>
//         <Route path='/about' element={<About_task/>}/>
//       </Routes>
//       <div>
//             <center>
//             <Link to='/'>Home</Link>&nbsp;&nbsp;
//             <Link to='/login'>Login</Link>&nbsp;&nbsp;
//             <Link to='/contact'>Contact</Link>&nbsp;&nbsp;
//             <Link to='/accordion'>Accordion</Link>&nbsp;&nbsp;
//             <Link to='/skills'>Skills</Link>&nbsp;&nbsp;
//             <Link to='/projects'>Projects</Link>&nbsp;&nbsp;
//             <Link to='/about'>About</Link>&nbsp;&nbsp;
//             </center>
            
//           </div>
//       </div>
//   )
// }

// export default App

// import React from 'react'
// import Counter from './Counter'
// import GetData from './GetData'

// const App = () => {
//   return (
//     <>
//     <GetData/>
    
//   </>)
// }

// export default App

// import React, { useState } from 'react';
// import Home_task from './Task/Home_task';
// import About_task from './Task/About_task';
// import Skills_task from './Task/Skills_task';
// import Project_task from './Task/Project_task';
// import Contact_task from './Task/Contact_task';
// import Accordion_task from './Task/Accordion_task';
// import Login_task from './Task/Login_task';

// function App() {
//   const [activeTab, setActiveTab] = useState('home');

//   const styles = {
//     nav: {
//       backgroundColor: '#ffffff',
//       padding: '15px 20px',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '15px',
//       flexWrap: 'wrap',
//       position: 'sticky',
//       top: 0,
//       zIndex: 1000,
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     },
//     navBtn: (isActive) => ({
//       padding: '8px 16px',
//       border: 'none',
//       borderRadius: '20px',
//       backgroundColor: isActive ? '#007bff' : 'transparent',
//       color: isActive ? '#ffffff' : '#495057',
//       fontWeight: '600',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//     }),
//     mainContent: {
//       minHeight: '80vh',
//       paddingBottom: '40px',
//     }
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'home':
//         return <Home_task setActiveTab={setActiveTab} />;
//       case 'about':
//         return <About_task />;
//       case 'skills':
//         return <Skills_task />;
//       case 'projects':
//         return <Project_task />;
//       case 'accordion':
//         return <Accordion_task />;
//       case 'contact':
//         return <Contact_task />;
//       case 'login':
//         return <Login_task />;
//       default:
//         return <Home_task setActiveTab={setActiveTab} />;
//     }
//   };

//   return (
//     <div style={{ backgroundColor: '#f4f6f9', minHeight: '100vh' }}>
//       {/* Navigation Bar */}
//       <nav style={styles.nav}>
//         <button 
//           style={styles.navBtn(activeTab === 'home')} 
//           onClick={() => setActiveTab('home')}
//         >
//           Home
//         </button>
//         <button 
//           style={styles.navBtn(activeTab === 'about')} 
//           onClick={() => setActiveTab('about')}
//         >
//           About
//         </button>
//         <button 
//           style={styles.navBtn(activeTab === 'skills')} 
//           onClick={() => setActiveTab('skills')}
//         >
//           Skills
//         </button>
//         <button 
//           style={styles.navBtn(activeTab === 'projects')} 
//           onClick={() => setActiveTab('projects')}
//         >
//           Projects
//         </button>
//         <button 
//           style={styles.navBtn(activeTab === 'accordion')} 
//           onClick={() => setActiveTab('accordion')}
//         >
//           More Details
//         </button>
//         <button 
//           style={styles.navBtn(activeTab === 'contact')} 
//           onClick={() => setActiveTab('contact')}
//         >
//           Contact
//         </button>
//         <button 
//           style={styles.navBtn(activeTab === 'login')} 
//           onClick={() => setActiveTab('login')}
//         >
//           Login
//         </button>
//       </nav>

//       {/* Dynamic Component Render */}
//       <div style={styles.mainContent}>
//         {renderContent()}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import Mani from './Mani'

const App = () => {
  return (
    <Mani/>
  )
}

export default App