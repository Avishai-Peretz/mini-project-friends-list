import React, { Component } from 'react'
import { itemSelected } from '../js/itemSelected'
import { postData, data } from '../js/data';

export default class CreateItem extends Component {

  create = async () => { 
    this.props.setState({spinner: false})
    if (this.props.inputValue) {
      await postData(this.props.inputValue)
      await this.props.setState({
        todoItems: await data(),
        selectedItem: "",
        inputValue: { name: "", picture: "" },
      })
      await this.props.setState({spinner: true})
    }else alert("Please set input value")
  }
  
  render() {
    return (
      <div hidden={!itemSelected(this.props.selectedItem)}><button className="btn" onClick={this.create}>Create</button></div>
    )
  }
}
 