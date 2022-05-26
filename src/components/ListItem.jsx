import React, { Component } from 'react'


export default class ListItem extends Component {
  render() {
    return (
      <div
        className='todo-item column-c-c'
        onClick={() => {
          if (this.props.selectedItem !== this.props.id || this.props.selectedItem === null) {
            this.props.setState({
              selectedItem: this.props.id,
              inputValue: { name: this.props.name, picture: this.props.picture },
            })
            
          }
          if (this.props.selectedItem === this.props.id) {
            this.props.setState({
              selectedItem: null,
              inputValue: { name: "", picture: "" },
            })
          }
        }}
        data-selected={this.props.selectedItem === this.props.id ? true : false}
      >
        {this.props.name}
        <img src={this.props.picture} alt={this.props.id} />
      </div>
    )
  }
}
