import React, { useState } from 'react'

function Usestate() {
    const[count,setcount]=useState(0)
    const increment=()=>{ 
        setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-1)
    }
  return (
    <div style={{textAlign:'center',margintop:'50px'}}>
    <h1>Counter Application</h1>
    <h2>{count}</h2>
    <button onClick={increment} style={{marginRight:'15px'}}>
        increment
    </button>
    <button onClick={decrement}>
        Decrement
    </button> </div>
  )
}

export default Usestate;