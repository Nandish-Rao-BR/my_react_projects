import React, { Component } from 'react'
import Styles from "./counterApp.module.css"
class Counterbycbf extends Component {
    constructor() {
        super()
        this.state ={
            count:0
        }
    }
    handleIncrement =()=> {
        this.setState({count:this.state.count+1})
    }
    handleDecrement = ()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
            }
 
    }
    handleReset =()=>{
        this.setState({count:0})
    }
  render() {
    return (
        
        <div className='main-div' >
            <div className={ Styles.container}>
            <h1>Counter App using Class based Component</h1>
            <h1> Count :  {this.state.count} </h1>
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
            <button onClick={this.handleReset}>Reset</button>
      
        </div>
        </div>
       
    )
  }
}
export default Counterbycbf
