import React, { useState } from 'react'
import Style from "./counterApp.module.css"
const Counterbyfbf = () => {
    let [count,setCount]=useState(0)
    let handleIncrement =( )=>{
        setCount(count+1)
    }
    let handleDecrement = ()=> {
        if(count>0){
        setCount(count-1)
        }
    }
    let handleReset = () =>{
        setCount(0)
    }
  return (
    
    <div className='main-div' >
            <div className={ Style.container}>
            <h1>Counter App using Function based Component</h1>
            <h1> Count :  {count} </h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
      
        </div>
        </div>
  )
}

export default Counterbyfbf
