import React, { Component } from 'react';
import { LineChart, Line, ResponsiveContainer} from 'recharts';

class Chart extends Component {
   constructor(props){
       super(props);
       this.state = {
           data : this.props.data,
       }
   }
   componentDidMount() {
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = this.state.data
       console.log(targetUrl);
        fetch(proxyUrl + targetUrl)
          .then(blob => blob.json())
          .then(data => {
            this.setState({data : data.values});
            return data;
          })
          .catch(e => {
            console.log(e);
            return e;
          });
    };
    render() {
        const data = this.state.data;
     
    return (
        <ResponsiveContainer>
            <LineChart data={data}>
              <Line type="monotone" dataKey="y" stroke="#8884d8" r={0} />
            </LineChart>
        </ResponsiveContainer>
        )
    }
}
export default Chart;