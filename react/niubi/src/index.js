import ReactDOM from 'react-dom';
import React from 'react';
import {createStore} from 'redux';
import Index from './Index.jsx';
import "antd/dist/antd.css";
import "./index.css";
import Add from './Add.jsx';
//数据
const data = [
    {
        name:'zhangsan',
        age:11,
        key:'1'
    },
    {
        name:'lisi',
        age:18,
        key:'2'
    },
    {
        name:'lidabao',
        age:30,
        key:'3'
    }
];

function reducer(state=data,action){
    switch(action.type){
        case("ADD"):{
            state.unshift(action.payload);
            for(var i in data){
                state[i].key=parseInt(i)+1;
            }
            break;
        }
        case("UPDATA"):{
            state[action.payload.key-1].name=action.payload.name?action.payload.name:state[action.payload.key-1].name;
            state[action.payload.key-1].age=action.payload.age?action.payload.age:state[action.payload.key-1].age;
            break;
            
        }
        case("DELETE"):{
            state.splice(action.payload-1,1);
            for(var i in data){
                state[i].key=parseInt(i)+1;
            }
            break;
            
        }
        default: return state;
    }
}
const store = createStore(reducer)

function add(obj){
    store.dispatch({
        type:"ADD",
        payload:obj
    })
}
function updata(obj){
    console.log(obj);
    store.dispatch({
        type:"UPDATA",
        payload:obj
    })
}
function del(index){
    store.dispatch({
        type:"DELETE",
        payload:index
    })
}

const value = store.getState();
const render=()=>ReactDOM.render(
    <div>
        <Add add={add} />
        <Index value={value} updata={updata} del={del}/>
    </div>,   
    document.getElementById('root')
)
render();
store.subscribe(render);