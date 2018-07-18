import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

class Counter extends React.Component{
    render(){
        return(
        <div>
            <div>{this.props.num}</div>
            <button onClick={this.props.add}>+++</button>
            <button onClick={this.props.reduce}>---</button>
        </div>
        )
    }
}
const reducer=function(state=0,action){
    switch(action.type){
        case("ADD"):return state+action.payload;
        case("REDUCE"):return state-action.payload;
        default:return state;
    }
}
const store=createStore(reducer);
function add(){
    // console.log("++");
    store.dispatch({
        type:"ADD",
        payload:2
    })
}
function reduce(){
    // console.log("--");
    store.dispatch({
        type:"REDUCE",
        payload:1
    })
}
const render=function(){
    console.log(store.getState())
    ReactDOM.render(
        <Counter num={store.getState()}
                 add={add}
                 reduce={reduce}
        />,
        document.getElementById('root')

    )
}
store.subscribe(render);
render();