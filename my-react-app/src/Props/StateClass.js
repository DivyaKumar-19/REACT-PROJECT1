import React,{Component} from "react";
class StateClass extends Component{
    state=
    {
        color:"Blue"
    }
    handleChange=()=>{this.setState({color:"Red"})}
    render()
    {
        return(
            <div>
                <h1>My favourite color is {this.state.color}</h1>
                <button onClick= {this.handleChange}>Click</button>
            </div>
        )
        
    }
}
export default StateClass;