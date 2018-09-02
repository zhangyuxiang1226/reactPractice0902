import React, { Component } from 'react'
import ListItem from './ListItem'
export default class List extends Component {
  static props = {
    showComment: true
  }
  render() {
    return (
      <div>
        {
            this.props.users.map((user, index) => {
                return (
                    <ListItem showComment={this.props.showComment} {...user} key={index} removeById={this.props.removeById} addComment={this.props.addComment}></ListItem>
                )
            })
        }
      </div>
    )
  }
}
