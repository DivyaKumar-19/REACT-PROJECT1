import { useState } from "react";
export default function  StateFunction()
{
    const[carName,setCarName]=useState("Thar");
    const changeCarName=()=>setCarName("BMW");

    const[count,setCount]=useState(0);
    const addCount=()=>setCount(count+2);
    const minusCount=()=>setCount(count-1);
    return(
        <div>
            <h1>My Car name is {carName}</h1>
            <button onClick={changeCarName}>Change</button>
            <h1>Count {count}</h1>
            <button onClick={addCount}>Increment</button>
            <br></br>
            <br></br>
            <button onClick={minusCount}>Decrement</button>
        </div>
    )
}
