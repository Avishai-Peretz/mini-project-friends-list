import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className='txt-40 txt-align column-c-c'>
                <span>
                {this.props.title}
                </span>
            </header>
        );
    }
}

export default Header;
