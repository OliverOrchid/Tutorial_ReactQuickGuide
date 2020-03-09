//词汇翻译示例 :  lift up   挺举 ;  pass down  沉降


import React  from  "react";
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {


    //In JavaScript classes, you need to always call super when defining the constructor 
    // of a subclass. All React component classes that have a constructor should start it with a "super(props)" call.

    
    // @Chapter OF THE : CompleteingTheGame-Lifting State Up --- Delete the constructor from Square because Square no longer keeps track of the game’s state
    
    // constructor(props){
    //     super(props);
    //     this.state={
    //         valueOfOliver:null,
    //     }
    // }

    render() {
      return (

        //不推荐的语法  <button className="square" onClick={function() { alert('click'); }}>
                
        //To save typing and avoid the confusing behavior of this, we will use the 
        // arrow function syntax for event handlers here and further below:


        //Notice how with onClick={() => alert('click')}, we’re passing a function
        //  as the onClick's  property. React will only call this function after a click. 
        
        // //下面是推荐的语法
        // <button className="square"  onClick =  {() => {alert("You Are Clicking Now!!!");}}  > 
        //   {this.props.valueOfOliver}
        //                     </button>


        
        <button className="square"  
                // onClick ={() => this.setState({valueOfOliver:'X'})}  
                onClick = { this.props.onClickOfBoard }     //The DOM <button> element’s onClick attribute has a special meaning to React 
                                                            //because it is a built-in component.  各类DOM(诸如 button,testBox)的所拥有的属性名是系统规定的,详见语言手册
                >  
            
            {/* {this.state.valueOfOliver} */  
                this.props.valueOfOliver
                                        }                          
                                                                 </button>

      );
    }
  }


  
class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squaresArrayInBoard :Array(9).fill(null) ,
        };
    }
    
    handleClickOfBoard(i){
        const  copyOfSquares = this.state.squaresArrayInBoard.slice();
        copyOfSquares[i] = 'X';
        this.setState({squaresArrayInBoard:copyOfSquares});  //数组对应数组 进行赋值
    }

    renderSquare(whateverNameYouWant) {
      return (
            <Square 
                valueOfOliver={this.state.squaresArrayInBoard[whateverNameYouWant]}

                onClickOfBoard = {  () => this.handleClickOfBoard(whateverNameYouWant) } //We have not defined the handleClickOfBoard() method yet, 
                                                                                //so our code crashes. If you click a square now, you should 
                                                                                //see a red error screen saying something like “this.handleClick is not a function”.

                //In React, it’s conventional to use on[Event] names for props which represent events and handle[Event] for the methods which handle the events.                                      />
                />                                                    
                );
    }
  
    
    render() {
      
        const status = ' "Next player: X - 这里是个文本常量而已,你可以随时修改!!!"  ';
  
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
  
ReactDOM.render(
    <Game />, //示例01 自主决定 渲染显示特定组件 到 container 中,但是由于此处没有container,仍旧无法呈现至浏览器中

    // <Board/>, //示例02 

    document.getElementById('root'), // 接下来 要设置 具体的container ,  此时浏览器可以正常显示 相关页面了!!!

);
  