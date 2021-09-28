import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }
  
  handleGameplay = (index) => {
    const { board } = this.state //destructuring to get to board
    board[index] = "🌴" //will reassign the value at board[index]
    this.setState({board: board})
  }

  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className = "gameboard">
            {this.state.board.map((value, index) =>{
              return( 
              <Square 
                value = {value} 
                index={index} 
                handleGameplay={this.handleGameplay}/>
              )
            })}
        </div>
      </>
    )
  }
}
export default App
