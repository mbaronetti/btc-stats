import React, { Component } from 'react';

class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            active : false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log('click ' + this.state.active);
    }
    render() {
    return (
      <div  className="Button-container">
        <button active={this.props.active} onClick={this.props.onClick} className="Button">
            <i className="material-icons">{this.props.icon}</i>
        </button>
        <span>{this.props.value}</span>
      </div>
    );
    }
}

export default Button;

