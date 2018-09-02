import React, { Component } from 'react'
import {Consumer} from '../context'
import List from './List'
import Comment from './Comment'
export default class ListItem extends Component {
    state = {
        users: [],
        id: 100000
    }
    addComment = (val) => {
        let id = this.state.id;
        let users = [...this.state.users, { avatar:  "http://05.imgmini.eastday.com/mobile/20171112/20171112104845_40c4a989ba5a02f512b05336bff309f8_1.jpeg", content: val, username: 'Jim', id: id}];
        this.setState({
            users
        });
        this.state.id+=1;
    }
    handleClick = (id) => {
        this.props.removeById(id);
    }
    removeById = (id) => {
        let users = this.state.users.filter(user=>user.id!==id); // 排除列表里相同id的，即达到删除的目的
        this.setState({
            users
        })
    }
  render() {
    let {id, avatar, content, username} = this.props;
    return (
        <Consumer>
            {(value)=>{
                return <div className="media">
                    <div className="media-left">
                        <img className="avatar" src={avatar} />
                    </div>
                    <div className="media-right">
                        <h3>{username} {id}</h3>
                        <div>评论：{content}</div>
                        <button className="btn btn-danger" onClick={(e)=>{
                            this.handleClick(id)
                        }}>删除</button>


                        <button className="btn btn-primary" onClick={()=>{
                            value.increment()
                        }}>赞</button>
                        
                        {this.props.showComment&&<Comment addComment={this.addComment}></Comment>}

                        <List showComment={false} users={this.state.users} removeById={this.removeById}></List>


                    </div>
                </div>
            }}
            
        </Consumer>
       
    )
  }
}
