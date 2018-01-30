import React, { Component } from 'react';
import Chart from './Chart';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            active : false,
        }
    }
    render() {
    return (
      <div className="Card">
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <i className="Card-icon material-icons">{this.props.icon}</i>
                <span className="Card-title">{this.props.title}</span>
                <span className="Card-info">{this.props.value}</span>
            </div>
            <div className="col-sm-12 col-md-6">
                <span className="Card-chart">
                    <Chart />
                </span>
        
            </div>
        </div>
      </div>
    );
    }
}

class CardText extends Component {
    constructor(props){
        super(props);
        this.state = {
            active : false,
        }
    }
    render() {
    return (
      <div className="CardText">
        <div className="row">
            <div className="col-sm-12">
                <p>asdmasmdmasd asdnamsdmasdmas </p>
            </div>
        </div>
      </div>
    );
    }
}

export default Card;

