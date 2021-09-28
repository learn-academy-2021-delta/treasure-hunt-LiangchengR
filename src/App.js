import React, { Component } from 'react'
import Square from './components/Square'

import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null,
      counter: 5

    }
  }

  componentDidMount(){
    let treasure = Math.floor(Math.random() * this.state.board.length)
    let bomb = Math.floor(Math.random() * this.state.board.length)
    this.setState({treasureLocation: treasure, bombLocation: bomb})

  }
  
  handleGameplay = (index) => {
    const { board, treasureLocation, bombLocation, counter} = this.state //destructuring -> opens up the this.state object
    
    //logic for if you run out of turns, and the location is not a bomb or treasure location:
    if(counter === 1 && treasureLocation !== index && bombLocation !== index){
      let newCount = counter - 1; //decrements counter still
      board[index] = "🌴" //updates square to tree
      this.setState({board: board, counter:newCount}) //then updates board and counter to show you ran out of turns

      //adds delay to the innder code by 100 milliseconds
      setTimeout(() => {
        //confirm window pops up. confirm window returns true or false depending if user clicks ok or cancel
        //if clicks ok, refreshes window to restart game 
        (window.confirm("You ran out of turns! Replay?")) && window.location.reload()
      }, 100)
    }

    //if square picked is treasure loc:
    else if(treasureLocation === index){
      board[index] = "💎" //reassign square with treasure icon
      this.setState({board: board}) //to update state of board

      
      setTimeout(() => {
        (window.confirm("You Won! 💎 Replay?")) && window.location.reload()
      }, 100)
    } 
    
    //if square picked is bomb loc:
    else if (bombLocation === index){
      board[index] = "💣"
      this.setState({board: board})
     
      setTimeout(() => {
        (window.confirm("You Lost! 💣 Replay?")) && window.location.reload()
      }, 100)
    } 
    

    else {
      board[index] = "🌴" //will reassign to tree
      let newCount = counter - 1;
      this.setState({board: board, counter:newCount})
    }
  }

  render(){
   console.log("Treasure: " + this.state.treasureLocation);
   console.log("Bomb: " + this.state.bombLocation);

    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <h2>Counter: {this.state.counter} </h2>
        <button>Restart Game</button>
        {/* gameboard that will call square class components */}
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
