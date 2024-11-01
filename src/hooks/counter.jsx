import { useState } from "react";

function Counter (){
  //use useState 
    const [count,setinc]=useState(0)
    

    

 var Increment=()=>{
   setinc((prevState)=>{
    console.log(prevState);
    return prevState +1
    
   })
 }

var Decrement=()=>{
    setinc((prevState)=>{
   return prevState-1

    })
 }
       
       
    return(
        <>
    
        <button onClick={Decrement} style={{backgroundColor:"pink"}}>Decrement</button>
        <h1>{count}</h1>
        <button onClick={Increment} style={{backgroundColor:"pink"}}>Increment</button>  
        </>
    )
}
export default Counter