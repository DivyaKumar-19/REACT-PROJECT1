import React, { Component } from 'react';
export default class Handle1 extends Component {
    state={hasError:false}
    static getderivedFromError(error)
    {
        return{
            hasError:true
        }
    }
    render() {
        if(this.state.hasError===true)
        {
            return <h1>Something went wrong</h1>
        }
        return this.props.children;
    }
}