import React, { Component } from 'react';

class TextAnimation extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : this.props.value
        }
    }
    componentDidMount(){
        const value = this.state.value;
        const res = value.split("");
        this.setState({value : ''});
        for (let value in res) {
          (function(value){
            window.setTimeout(function(){
                document.getElementById('homeText').innerHTML += res[value]; 
            }, value * 50);
          }(value));
        }
    }
    render() {
    return (
      <div className="TextAnimation">
        <p id="homeText">{this.state.value}</p>
      </div>
    );
    }
}

export default TextAnimation;
