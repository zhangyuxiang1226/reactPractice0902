import React, { Component } from 'react';
import axios from './request'
import 'bootstrap/dist/css/bootstrap.css'
import './Common/common.css'
import Comment from './components/Comment'
import List from './components/List'
import {Provider} from './context'

class App extends Component {
    state = {
        users: [],
        count: 0,
        id: 3
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    addComment = (val) => {
        let id = this.state.id;
        let users = [...this.state.users, { avatar:  "http://05.imgmini.eastday.com/mobile/20171112/20171112104845_40c4a989ba5a02f512b05336bff309f8_1.jpeg", content: val, username: 'Jim', id: id}];
        this.setState({
            users
        });
        this.state.id+=1;
    }
    removeById = (id) => {
        console.log(id)

        let users = this.state.users.filter(user=>user.id!==id); // 排除列表里相同id的，即达到删除的目的
        this.setState({
            users
        })
    }
    async componentDidMount() {
        let users = await axios.get('/users.json');
        this.setState({
            users
        });
    }
    render() {
        return (
        <Provider value={{increment: this.increment}}>
            <div className="container">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        评论
                    </div>
                    <div className="panel-body">
                        <List users={this.state.users} showComment={true} removeById={this.removeById} addComment={this.addComment}></List>
                    </div>
                    <div className="panel-bottom">
                    
                    <br/>
                    <Comment addComment={this.addComment}></Comment>
                    获得的赞数量{this.state.count}
                    </div>
                </div>
            </div>
        </Provider>
            
        );
    }
}

export default App;