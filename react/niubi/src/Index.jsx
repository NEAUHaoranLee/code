import React from 'react';
import ReactDOM from 'react-dom';
import Updata from './Updata.jsx'; 
import {Table,Divider} from 'antd';
const {Column}=Table;
class Index extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <Table dataSource={this.props.value} id="table">
                <Column
                    title="序号"
                    dataIndex="key"
                    key="key"
                />
                <Column
                    title="Name"
                    dataIndex="name"
                    key="name"
                />
                <Column
                    title="Age"
                    dataIndex="age"
                    key="age"
                />
                <Column
                    title="操作"
                    key="action"
                    render={(text,record)=>{return (
                        <div>
                            <Updata title="编辑数据" index={record.key} updata={this.props.updata}/>
                            <a href="javascript:;" onClick={this.props.del.bind(this,record.key)}>删除</a>
                        </div>
                    )}}
                />
            </Table>
        );
    }
}
export default Index;