import React from 'react';
class Square extends React.Component {
    constructor(){
        super();
        this.state={
            
        }
        this.click=this.click.bind(this);
    }
    click(){
        this.props.click()
    }
    render() {
      return (
        <button className="square" onClick={this.click}>
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(){
        super();
        this.state={
            square:Array(9).fill(null),
            flag:true
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(i){
        const square=this.state.square.slice();
        if(this.state.square[i]==null){
            square[i]=this.state.flag?"X":"O";
            this.setState({
                square:square,
                flag:!this.state.flag
            }) 
        }
        
        console.log(this.state.square)
    }
    renderSquare(i) {

        return <Square value={this.state.square[i]} click={this.handleClick.bind(this,i)} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
//   ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );
  
export default Game;