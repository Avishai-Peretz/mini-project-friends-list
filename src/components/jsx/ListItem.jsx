import React, { Component } from 'react'


export default class ListItem extends Component {

  onClickHandler = async () => {
    const notSameItem =await this.props.selectedItem !== this.props.id ? true : false;
    if (notSameItem ) {
      await this.props.setState({
        selectedItem: this.props.id,
        inputValue: { name: await this.props.name, picture: await this.props.picture },
      })
      
    }else {
      await this.props.setState({
        selectedItem: null,
        inputValue: { name: "", picture: "" },
      })
    }
  }

  render() {
    return (
      <div
        className='todo-item column-c-c'
        onClick={this.onClickHandler}
        data-selected={this.props.selectedItem === this.props.id ? true : false}
      >
        {this.props.name}
        <img src={this.props.picture} alt={this.props.id} />
      </div>
    )
  }
}
