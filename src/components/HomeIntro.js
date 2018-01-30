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
            <small className="text-muted">Prototypes over presentations, and we prefer to question everything.</small>
            <p className="HomeTitle" >BLOCKCHAIN</p>
            <TextAnimation id="homeText" value="At the center has to be a clear and precise understanding of the way technology and people work together. How do you think we could better organize/display these charts to our users? " />
        </div>
    );
    }
}

export default HomeIntro;

