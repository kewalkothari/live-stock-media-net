import React from 'react';
import TableComponent from '../../Component/TableCompoenent/TableComponent';
import * as Constants from '../../Constants/constant_strings';

export default class StocksComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stockData: {}
        }
        this.webSocket = new WebSocket(Constants.WebSocketServerURL);
    }

    componentDidMount() {
        this.webSocket.onopen = () => {
            console.log('Connection Established!');
        }

        this.webSocket.onmessage = event => {
            let stockDataMessage = JSON.parse(event.data);
            let state_stocks = {...this.state.stockData };

            stockDataMessage.forEach(data => {
                let key = data[0];
                let value = data[1];
                state_stocks[key] = parseFloat(value).toFixed(2);
            });
            
            this.setState({
                stockData: state_stocks
            });
        }

        this.webSocket.onclose = () => {
            console.log('Connection Disconnected!');
        }
    }

    render() {
        
        return (
                <TableComponent tableData={this.state.stockData}></TableComponent>
        );
    }
}