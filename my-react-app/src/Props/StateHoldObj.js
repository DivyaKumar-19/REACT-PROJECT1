import React, {useState}from 'react'

export default function StateHoldObj() {
    const[college,setCollege]=useState({id:7278, name:"skct", year:2023})
    const changeData=()=>{
        setCollege((preState)=>{return{...preState,name:"ski"}})
    }
    return(
        <div>
            <h1>college id {college.id}</h1>
            <h1>college name {college.name}</h1>
            <h1>year {college.year}</h1>
            <button onClick={changeData}>Click</button>
        </div>
    )
}
