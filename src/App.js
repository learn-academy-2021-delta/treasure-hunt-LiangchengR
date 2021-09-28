import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null

    }
  }

  componentDidMount(){
    let treasure = Math.floor(Math.random() * this.state.board.length)
    let bomb = Math.floor(Math.random() * this.state.board.length)
    this.setState({treasureLocation: treasure, bombLocation: bomb})

  }
  
  handleGameplay = (index) => {
    const { board, treasureLocation, bombLocation} = this.state //destructuring -> opens up the this.state object

    //treasure, bomb, and tree conditionals
    if(treasureLocation === index){
      board[index] = "💎" //will reassign to treasure
      this.setState({board: board}) //to update state of board
    } else if (bombLocation === index){
      board[index] = "💣" //will reassign to bomb
      this.setState({board: board})
    } else {
      board[index] = "🌴" //will reassign to tree
      this.setState({board: board})
    }

  }

  render(){
   console.log("Treasure: " + this.state.treasureLocation);
   console.log("Bomb: " + this.state.bombLocation);

    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className = "gameboard">
            {this.state.board.map((value, index) =>{
              return( 
                <Square 
                  value = {value} 
                  index = {index} 
                  key = {index}
                  handleGameplay = {this.handleGameplay}
                />
              )
            })}
        </div>
      </>
    )
  }
}
export default App
