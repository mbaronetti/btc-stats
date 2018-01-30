import React, { Component } from 'react';
import logo from './logo.svg';
import Background from './components/Background';
import HomeIntro from './components/HomeIntro';
import Button from './components/Button';
import Card from './components/Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            section : "Popular Stats",
            resources : null,
            data: '',
            fetching: 'fetching...'
        }
    }
   componentDidMount() {
        fetch("https://api.myjson.com/bins/108cb9")
            .then( (response) => {
                return response.json() })   
                    .then( (json) => {
                        this.setState({data: json});
                        console.log(this.state.data);
                    }).catch(function(error) {
                    this.setState({fetching: 'error'});
                    console.log(error);
            });;
    };
    
  render() {
    return (
      <div className="App">
        <Background />
        <header hidden className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container App-container">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <HomeIntro />
                    <Button active="true" icon="compare_arrows" value="Popular Stats"/>
                    <Button icon="monetization_on" value="Currency Stats"/>
                    <Button icon="list" value="Block Details"/>
                    <Button icon="fingerprint" value="Mining Information"/>
                </div>
                <div className="col-sm-12 col-md-6">
                    <p className="section--title">{this.state.section}</p>
                    <Card icon="alarm" title="USD Market Price" value={(this.state.data.market_price_usd) ? this.state.data.market_price_usd : this.state.fetching} />
                    <Card icon="list" title="Blocks Mined" value={this.state.data.n_blocks_mined} />
                    <Card icon="fingerprint" title="BTC Revenue" value={ this.state.data.miners_revenue_btc} />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
