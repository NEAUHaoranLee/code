import React from 'react';
import ReactDOM from 'react-dom';
import { Button,Modal,Input } from 'antd';
import "./index.css";

class Dialog extends React.Component{
    constructor(props){
        super(props);
        const name = null;
        const age = null;
        this.state = {
            visible:false
        }


        this.show=this.show.bind(this);
        this.cancel=this.cancel.bind(this);
        this.ok=this.ok.bind(this);
    }
    ok(){
        const obj = {
            name:this.name,
            age:this.age,
            key:parseInt(this.props.index)?this.props.index:null
        }
        this.name=null;
        this.age=null;
        this.props.f(obj);
        this.setState({
            visible:false
        })
    }
    show(){
        this.setState({
            visible:true
        })
    }
    cancel(){
        this.setState({
            visible:false
        })
    }
    render(){
        return(
            <div>
                <Modal 
                    title={this.props.title}
                    visible={this.state.visible}
                    maskClosable="true"
                    onOk={this.ok}
                    onCancel={this.cancel}
                    destroyOnClose="true"
                >
                    <Input placeholder="name" className="input" onChange={(e)=>{this.name=e.target.value;console.log(this.name,this.age);}}/>
                    <Input placeholder="age" className="input" onChange={(e)=>{this.age=e.target.value;console.log(this.name,this.age);}}/>
                </Modal>
            </div>
        );
    }
}

export default Dialog;