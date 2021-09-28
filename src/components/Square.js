import React, { Component } from 'react'

class Square extends Component{

  handleClick = () => {
    this.props.handleGameplay(this.props.index)
  }
  
  render(){
    return(
      <>
      <div 
        className = "square" 
        onClick = {this.handleClick}
        // when clicked, it calls the function handleClick in Square.js which calls the function handleGameplay in App.js and passes in the index as an argument
      >
        {this.props.value}
      </div>
      </>
    )
  }
}
export default Square
