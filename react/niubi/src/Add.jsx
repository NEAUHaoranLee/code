import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import Dialog from './Dialog.jsx'
import "./index.css";

class Add extends React.Component{
    constructor(){
        super();
        this.show=this.show.bind(this);
    }
    show(){
        this.refs.dialog.show();
    }
    render(){
        return(
            <div>
                <Button 
                    type="default" 
                    onClick={this.show}
                    style={{
                        position: 'relative',
                        zIndex:99,
                        float: 'right',
                        margin: '30px 30px'
                    }}
                    >添加数据</Button>
                <Dialog f={this.props.add} ref="dialog" title="添加数据"/>
            </div>
        )
    }
}
export default Add;