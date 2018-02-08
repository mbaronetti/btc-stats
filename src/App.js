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
            fetching: 'fetching...',
            currencyActive : '',
            popularActive : 'true', 
            currencyVisible : 'no',
            popularVisible : ''
            
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
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = "https://api.blockchain.info/stats"
        fetch(proxyUrl + targetUrl)
          .then(blob => blob.json())
          .then(data => {
            this.setState({data : data});
            return data;
          })
          .catch(e => {
            console.log(e);
            return e;
          });
       
    };
    
  render() {
      const data = {
          totalBitcoins : { title : 'Total Bitcoins' , source : "https://api.blockchain.info/charts/blocks-size?format=json"},
          marketPrice : {title : 'Market Price' , source : "https://api.blockchain.info/charts/market-price?format=json"},
          marketCap : {title : 'Market Cap' , source : "https://api.blockchain.info/charts/market-cap?format=json"},
          tradeVolume : {title : 'Trade Volume' , source : "https://api.blockchain.info/charts/trade-volume?format=json"}
      }
      
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
                    <Button active={this.state.popularActive} onClick={this.handlePopularClick} icon="compare_arrows" value="Popular Stats"/>
                    <Button active={this.state.currencyActive} onClick={this.handleCurrencyClick} icon="monetization_on" value="Currency Stats"/>
                    <Button icon="list" value="Block Details"/>
                    <Button icon="fingerprint" value="Mining Information"/>
                </div>
                <div visible={this.state.popularVisible} className="Popular col-sm-12 col-md-6">
                    <p className="section--title">{this.state.section}</p>
                    <Card icon="alarm" title="Market Price (USD)" value={(this.state.data) ? this.state.data.market_price_usd.toFixed(2) : "loading"} text="Precio medio de mercado en USD a través de intercambios importantes de bitcoins." />
                    <Card icon="list" title="Blocks Mined" value={(this.state.data) ? this.state.data.n_blocks_mined : 'loading'} text="El tamaño de bloque promedio de 24 horas en MB." />
                    <Card icon="fingerprint" title="BTC Revenue" value={(this.state.data) ? this.state.data.miners_revenue_btc : 'loading'} text="El número total de transacciones Bitcoin confirmados en las últimas 24 horas." />
                </div>
                <div visible={this.state.currencyVisible} className="Currency col-sm-12 col-md-6">
                    <p className="section--title">{this.state.section}</p>
                    <Card data={data.totalBitcoins.source} icon="alarm" title={data.totalBitcoins.title} value={this.state.data.n_blocks_total} text="" />
                    <Card data={data.marketPrice.source} icon="alarm" title={data.marketPrice.title} value={this.state.data.n_blocks_total} text="" />
                    <Card data={data.marketCap.source} icon="list" title={data.marketCap.title} value={this.state.data.n_tx} text="" />
                    <Card data={data.tradeVolume.source} icon="fingerprint" title={data.tradeVolume.title} value={ this.state.data.minutes_between_blocks} text="" />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
