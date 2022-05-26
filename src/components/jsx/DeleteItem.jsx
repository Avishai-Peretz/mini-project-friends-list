import React, { Component } from 'react'
import { deleteData, data } from '../js/data'
import { itemSelected } from '../js/itemSelected'

export default class DeleteItem extends Component {

  delete = async () => {
    this.props.setState({spinner: false})
    await deleteData(this.props.selectedItem)
    await this.props.setState({
      todoItems: await data(),
      selectedItem: null,
      inputValue: {name: "", picture: ""},
      inputPlaceholder: "Create Item",
    })
    await this.props.setState({spinner: true})
  }
  render() {
    return (
      <div hidden={itemSelected(this.props.selectedItem)}><button className="btn" onClick={this.delete}>Delete</button></div>
    )
  }
}
