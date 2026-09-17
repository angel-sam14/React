// import React, {Component} from "react";

// class Child1 extends Component {
//     componentWillUnmount() {
//         console.log("child component removed");
//     }
//     render() {
//         return (
//             <div>   
//                 <h1>Child Component</h1>
//             </div>
//         );
//     }  
// } 
//     export default Child1;
// -----------------------------------------------
// import React,{useEffect} from "react";

// function child1(){
//     useEffect(()=>{
//         return()=>{
//             console.log("child component removed")
//         }
//     },[])
//     return(
//         <div>
//             <h1>Child Component</h1>
//         </div>
//     )
// }
// export default child1