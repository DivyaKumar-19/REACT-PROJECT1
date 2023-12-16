import React from "react";
export default function List()
{
    const state=[{s:1,Name:"Tamilnadu"},
                {s:2,Name:"Andhra"},
                  {s:3,Name:"Kerala"},]

    const display=state.map((sta)=><li key={sta.s}>{sta.Name} </li>)
    return (
        <div style={{backgroundColor:"plum"}}>
            <h1>
                 
                List of States
                {display}
            </h1>
        </div>
    )
}