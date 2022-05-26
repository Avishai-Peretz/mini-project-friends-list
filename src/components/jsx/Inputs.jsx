import React, { Component } from 'react';

class Inputs extends Component {
    render() {
        return (
            <div className="input-container column-c-c">
                <input
                    type="text"
                    value={this.props.inputValue.name}
                    onChange={(e) => this.props.setState({ inputValue: { name: e.target.value, picture: this.props.inputValue.picture } })}
                    placeholder={'User Name'} />
                <input
                    className='long-input'
                    type="text" value={this.props.inputValue.picture}
                    onChange={(e) => this.props.setState({ inputValue: { name: this.props.inputValue.name, picture: e.target.value } })}
                    placeholder={'Picture URL'} />
            </div>
        );
    }
}

export default Inputs;
