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
            section : "Currency Stats",
            resources : null,
            data: '',
            fetching: 'fetching...',
            currencyActive : 'true',
            popularActive : '',
            currencyVisible : '',
            popularVisible : 'no'
            
        }
        this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
        this.handlePopularClick = this.handlePopularClick.bind(this);
    }
    handleCurrencyClick(){
        this.setState({
            currencyActive : 'true',
            popularActive : 'false',
            section : 'Currency Stats',
            currencyVisible : '',
            popularVisible : 'no'
            
        });
    } 
    handlePopularClick(){
        this.setState({
            currencyActive : 'false',
            popularActive : 'true',
            section : 'Popular Stats',
            currencyVisible : 'no',
            popularVisible : ''
        });
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
                    <Button active={this.state.currencyActive} onClick={this.handleCurrencyClick} icon="compare_arrows" value="Currency Stats"/>
                    <Button active={this.state.popularActive} onClick={this.handlePopularClick} icon="monetization_on" value="Popular Stats"/>
                    <Button icon="list" value="Block Details"/>
                    <Button icon="fingerprint" value="Mining Information"/>
                </div>
                <div visible={this.state.popularVisible} className="Popular col-sm-12 col-md-6">
                    <p className="section--title">{this.state.section}</p>
                    <Card icon="alarm" title="USD Market Price" value={this.state.data.market_price_usd} text="Precio medio de mercado en USD a través de intercambios importantes de bitcoins." />
                    <Card icon="list" title="Blocks Mined" value={this.state.data.n_blocks_mined} text="El tamaño de bloque promedio de 24 horas en MB." />
                    <Card icon="fingerprint" title="BTC Revenue" value={ this.state.data.miners_revenue_btc} text="El número total de transacciones Bitcoin confirmados en las últimas 24 horas." />
                </div>
                <div visible={this.state.currencyVisible} className="Currency col-sm-12 col-md-6">
                    <p className="section--title">{this.state.section}</p>
                    <Card icon="alarm" title="Circulation" value={this.state.data.n_blocks_total} text="" />
                    <Card icon="list" title="N TX" value={this.state.data.n_tx} text="" />
                    <Card icon="fingerprint" title="Block rate" value={ this.state.data.minutes_between_blocks} text="" />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
