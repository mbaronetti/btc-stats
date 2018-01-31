import React, { Component } from 'react';
import TextAnimation from './TextAnimation';

class HomeIntro extends Component {
    constructor(props){
        super(props);
        this.state = {
            active : false,
        } 
    }
    render() {
    return (
        <div className="HomeIntro">
            <small className="text-muted">Welcome to our network, making of the future of the world</small>
            <p className="HomeTitle" >BLOCKCHAIN</p>
            <TextAnimation id="homeText" value="Our technology is revolutionizing the financial services industry by empowering millions across the globe to authenticate and transact immediately and without costly intermediaries." />
        </div>
    );
    }
}

export default HomeIntro;

