import React, {Component} from 'react'
export default class PropsClass extends Component
{
    render()
    {
        return(
           <div>
            <h1>I am from {this.props.district}</h1>
           </div>
        )
    }
}