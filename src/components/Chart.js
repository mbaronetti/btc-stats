import React, { Component } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

class Chart extends Component {
    render() {
        const data = [
      {name: 'Page A', uv: 4000 * Math.random(), pv: 2400 * Math.random(), amt: 2400},
      {name: 'Page B', uv: 3000 * Math.random(), pv: 1398 * Math.random(), amt: 2210},
      {name: 'Page C', uv: 2000 * Math.random(), pv: 9800 * Math.random(), amt: 2290},
      {name: 'Page D', uv: 2780 * Math.random(), pv: 3908 * Math.random(), amt: 2000},
      {name: 'Page E', uv: 1890 * Math.random(), pv: 4800 * Math.random(), amt: 2181},
      {name: 'Page F', uv: 2390 * Math.random(), pv: 3800 * Math.random(), amt: 2500},
      {name: 'Page G', uv: 3490 * Math.random(), pv: 4300 * Math.random(), amt: 2100},
    ];
    return (
        <ResponsiveContainer>
            <LineChart data={data}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
        )
    }
}
export default Chart;