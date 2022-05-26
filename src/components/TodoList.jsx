import React, { Component } from 'react'
import ListItem from './ListItem'



export default class TodoList extends Component {
    
    render() {
    return (
        <div className="todo-list">
            {this.props.todoItems.map((name  , key) => {
                return (
                    <ListItem
                        key={key}
                        setState={this.props.setState}
                        selectedItem={this.props.selectedItem}
                        name={name.name}
                        picture={name.picture}
                        id={name.id}
                    />                   
                )
            })}
        </div>
    )
  }
}
