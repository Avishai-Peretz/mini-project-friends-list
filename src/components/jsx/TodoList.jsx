import React, { Component } from 'react'
import ListItem from './ListItem'



export default class TodoList extends Component {
    
    render() {
    return (
        <div className="todo-list">
            {this.props.todoItems.map(( {name, picture, id} , key) => {
                return (
                    <ListItem
                        key={key}
                        setState={this.props.setState}
                        selectedItem={this.props.selectedItem}
                        name={name}
                        picture={picture}
                        id={id}
                    />                   
                )
            })}
        </div>
    )
  }
}
