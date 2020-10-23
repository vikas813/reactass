import React from "react";
class Coun extends React.Component{
    constructor(){
        super();
        this.state ={
            count : 0
        }
    }
    
    updateClick=()=>{
        this.setState({count : this.state.count+1})
    }
    decrementClick=()=>{
        this.setState({count: this.state.count-1})
    }
    resetClick=()=>{
        this.setState({count : (this.state.count=0)})
    }
    
    render(){
        return (
        <div>
            <h1> {this.state.count} </h1>
            <button onClick={this.updateClick}>increment the value</button>
            
            <button onClick={this.decrementClick}>Decrement the value</button>
            <button onClick={this.resetClick}>reset the value</button>
        </div>
        )
    }
}
export default Coun ;