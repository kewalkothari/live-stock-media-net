import React from 'react';
import TableComponent from '../../Component/TableCompoenent/TableComponent';

const socketURL = 'ws://stocks.mnet.website';

export default class StocksComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stockData: {}
        }
        this.webSocket = new WebSocket(socketURL);
    }

    render() {
        return (
                <TableComponent tableData={this.state.stockData}></TableComponent>
        );
    }

    componentDidMount() {
        this.webSocket.onopen = () => {
            console.log('Connection Established');
        }

        this.webSocket.onmessage = event => {
            let socketData = JSON.parse(event.data);
            let stocks = {};
            console.log(socketData);    
            socketData.forEach(data => {
                let key = data[0];
                let value = data[1];
                stocks[key] = parseFloat(value).toFixed(2);
            });

            let sorted_stocks = {...this.state.stockData };
            Object.keys(stocks).sort().forEach(function(key) {
                sorted_stocks[key] = stocks[key];
             });

            this.setState({
                stockData: sorted_stocks
            });
        }

        this.webSocket.onclose = () => {
            console.log('Connection Disconnected!');
        }

    }
}