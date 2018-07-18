import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './Dialog.jsx'
import "./index.css";

class Updata extends React.Component{
    constructor(){
        super();
        this.show=this.show.bind(this);
    }
    show(e){
        this.refs.updata.show(); 

    }
    render(){
        return(
            <div>
                <a href="#" onClick={this.show}>编辑</a>
                <Dialog ref="updata" index={this.props.index} title={this.props.title} f={this.props.updata}/>
            </div>
        )
    }
}

export default Updata;