import React, { Component } from 'react'
import { itemSelected } from '../js/itemSelected';
import { data, putData } from '../js/data.js';

export default class UpdateItem extends Component {
  
  update = async () => {
    this.props.setState({spinner: false})
    const selected = this.props.selectedItem
    if (this.props.inputValue.name && this.props.inputValue.picture) {  
      await putData(this.props.inputValue, selected)
      await this.props.setState({
        todoItems: await data(),
        selectedItem: null,
        inputValue: {name: "", picture: ""},
        inputPlaceholder: "Create Item",
      })
    }else alert("Please set input value")
    await this.props.setState({spinner: true})
  };

  render() {
    return (
      <div hidden={itemSelected(this.props.selectedItem)}><button className="btn" onClick={this.update}>Update</button></div>
    )
  }
}
