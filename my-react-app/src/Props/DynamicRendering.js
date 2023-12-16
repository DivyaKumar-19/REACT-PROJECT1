import React from 'react'
const isLoggedIn=true;
export default function DynamicRendering()
{
    if(isLoggedIn)
    {
       return <p>You are Logged</p>
    }
    else{
      return  <p>You are not Logged</p>
    }
}