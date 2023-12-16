import React from 'react';
function Car({carName})
{
    if(carName === "JCB")
    {
       throw new Error()
    }
    return(
        <div>
            {carName}
        </div>
    )
}
export default Car;
