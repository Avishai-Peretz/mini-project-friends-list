import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
        <div className="box" hidden={this.props.spinner}>
            <div className="loader1"></div>                   
        </div>
    )
  }
}
