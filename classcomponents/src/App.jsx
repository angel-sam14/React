// import React from 'react';
// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Sara",
//       age: 20,
//     };
//   }
//   changeName = () => {
//     this.setState({ 
//       name: "Alice"
//      });
//   }
//   changeAge = () => {
//     this.setState({ 
//       age: 20
//      });
//    }
//   render() {
//     return (
//       <div>
//             <p>Hi name is {this.state.name}</p>
//             <p>age is {this.state.age}</p>
//             <button onClick={this.changeName}>Change Name</button>
//             <button onClick={this.changeAge}>Change Age</button>
//       </div> 
//     );
// }

//   }
// export default App;
// -----------------------------------------------------

// import React from 'react';
// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }
//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   drecement = () => {
//     this.setState({ count: this.state.count - 1 });
//   }
//   reset=() => {
//     this.setState({ count: 0 });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Counter: {this.state.count}</h1>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.drecement}>Decrement</button>
//         <button onClick={this.reset}>Reset</button>
//       </div>
//     );
//   } 
// }
//   export default App;
// --------------------------------------------------------------------

// import { Component } from "react";
// import Child1 from "./component/child1";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//       invisible: false,
//     };
//   }

//   componentDidMount() {
//     console.log("component created");
//   }

//   componentDidUpdate() {
//     console.log("component updated");
//   }

//   componentWillUnmount() {
//     console.log("component destroyed");
//   }

//   render() {
//     return (
//       <div>
//         <h1>Counter App</h1>

//         <button
//           onClick={() =>
//             this.setState({
//               count: this.state.count + 1,
//             })
//           }
//         >
//           Count is {this.state.count}
//         </button>

//         <button
//           onClick={() =>
//             this.setState({
//               invisible: !this.state.invisible,
//             })
//           }
//         >
//           Toggle Visibility
//         </button>

//         {this.state.invisible && <Child1 />}
//       </div>
//     );
//   }
// }

// export default App;

// -----------------------------------------------------
// import {useState ,useEffect} from "react";  
// import Child1 from "./component/child1";

// function App() {
//   const [count, setCount] = useState(0);
//   const [invisible, setInvisible] = useState(false);

//   useEffect(() => {
//     console.log("component created");
//   }, []);
//   useEffect(() => {
//     console.log("component updated");
//   }, [count]);

//   useEffect(() => {
//     return () => {
//       console.log("component destroyed");
//     };
//   }, []);

//   return (
//     <div>
//       <h1>App component</h1>
//       <button onClick={() => setCount(count + 1)}>Count is {count}</button>
//       <button onClick={() => setInvisible(!invisible)}>Toggle Visibility</button>
//       {invisible && <Child1 />}
//     </div>
//   );
// }

// export default App;
// --------------------------------------------------------
// 7/09/26
// -------
// import React from "react";
// import {useState} from "react";

// function App() {
//   const[name, setName] = useState("Sara");
//   return (
//     <div>
//        <p>Name: {name}</p>
//       <button onClick={() => setName("Alice")}>Change Name</button>
//     </div>
//   );
// }
//   export default App;
  // ----------------------------------------------------------------
//   import React from "react";
//   import {useState} from "react";

//   function App() {

//   const[count ,setcount] = useState(0);
//   return(
//     <div>
//       <p>Count: {count}</p>
//        <button onClick={() => setcount(count + 1)}>+</button>
//       <button onClick={() => setcount(count - 1)}>-</button> 
//     </div>
//   );
// }
// export default App;
// -----------------------------------------------------------------------
// import React from "react";  
// import {useState} from "react";
// function App() {

//   const[show, setShow] = useState(true); 
//   const[hide, setHide] = useState(false);
//   return(
//     <div>
//       <input type="text" value={text} onChange={(e) => setText(e.target.value)} /> 
//        <h1>You typed: {text}</h1> 
//        <button onClick={() =>setShow(!show)}>Show/Hide</button>
//       {show && <p>This is some text</p>}  
//   </div>
//   );
// } 
// export default App;
// ----------------------------------------------------------------
// import React from "react";
// import { useState } from "react";
// function App() {
// const[text, setText] = useState("");
// return(
//   <div>
//      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

//        <button onClick={() => setText("")}>Clear</button>
//        <p>{text}</p>
//   </div>
// )
// }
// export default App;
// -----------------------------------------------------------------
// import React from "react";
// import { useState } from "react";
// function App() {
//   const [color, setColor] = useState("white");
//   return(
  
//     <div style={{backgroundColor:color ,height:"200px"}}>
//     <button onClick={() => setColor("red")}>Red</button>
//     <button onClick={() => setColor("blue")}>Blue</button>
//     <button onClick={() => setColor("green")}>Green</button> 
//     </div>
//     );
//     }
//     export default App;
  // ------------------------------------------------------------  
// import React from "react";
// import { useState } from "react";
// function App() {
//   const [Name, setName] = useState("");
//   const [Age, setAge] = useState("");

//     return (
//     <div>

//        <input type="text" placeholder="Enter your Name" value={Name} onChange={(e) => setName(e.target.value)} /> 
//       <input type="text" placeholder="Enter your Age" value={Age} onChange={(e) => setAge(e.target.value)} />
//        <p>Name: {Name}</p> 
//        <p>Age: {Age}</p> 
//        </div>
//     )
//   }
//   export default App;
//  -------------------------------------------------------------------------
// import React from "react";
// import { useState } from "react";
// function App() {
//   const [text, setText] = useState("");
//   const [items, setItems] = useState([]);
//   const additem = () => {
//     if (text.trim() !== "") {
//       setItems([...items, text]);
//       setText("");
//     }
//   };
//   return (
//     <div>
//        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

//        <button onClick={additem}>Add</button>
//        <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul> 
//        <p>{text}</p>
//     </div>

//   );
// } 
// export default App 
// -----------------------------------------------------------------------------