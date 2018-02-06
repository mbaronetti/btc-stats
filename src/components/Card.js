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
            <div  className="Card-chart col-sm-12 col-md-6">
                <Chart data={this.props.data} />
            </div>
            <div className="Card-text col-sm-12 col-md-6">
                <p>{this.props.text}</p>
            </div>
        </div>
      </div>
    );
    }
}


export default Card;

