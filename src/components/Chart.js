import React, { Component } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

//https://api.blockchain.info/charts/market-price?timespan=2weeks&rollingAverage=8hours&format=json
//https://api.blockchain.info/charts/total-bitcoins?timespan=1weeks&rollingAverage=36hours&format=json
//https://api.blockchain.info/charts/market-cap?timespan=1weeks&rollingAverage=36hours&format=json
//https://api.blockchain.info/charts/trade-volume?timespan=1weeks&rollingAverage=36hours&format=json

class Chart extends Component {
   constructor(props){
       super(props);
       this.state = {
           data : this.props.data,
           fetching : ''
       }
   }
   componentDidMount() {
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = this.state.data
       console.log(targetUrl);
        fetch(proxyUrl + targetUrl)
          .then(blob => blob.json())
          .then(data => {
            let stringify = JSON.stringify(data.values);
            stringify = stringify.replace(/\"x\":/g, "\"px\":").replace(/\"y\":/g, "\"uv\":");
            const chartData = JSON.parse(stringify);
            this.setState({data : chartData});
            return data;
          })
          .catch(e => {
            console.log(e);
            return e;
          });
    };
    render() {
        const data = this.state.data;
        /*for(let property in data){
         //console.log(this.state.data[property])
        }
      
        const data = [
          {uv: 4000 * Math.random(), pv: 2400 * Math.random()},
          {uv: 4000 * Math.random(), pv: 2400 * Math.random()},
          {uv: 4000 * Math.random(), pv: 2400 * Math.random()},
          {uv: 4000 * Math.random(), pv: 2400 * Math.random()},
          {uv: 4000 * Math.random(), pv: 2400 * Math.random()},
          {uv: 4000 * Math.random(), pv: 2400 * Math.random()},
          {uv: 4000 * Math.random(), pv: 2400 * Math.random()},
          ];
          */
     
    return (
        <ResponsiveContainer>
            <LineChart data={data}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" r={0} />
            </LineChart>
        </ResponsiveContainer>
        )
    }
}
export default Chart;