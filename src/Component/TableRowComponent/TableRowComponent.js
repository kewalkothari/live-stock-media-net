import React from 'react';

export default class TableRowComponent extends React.Component {

    stockName = '';
    stockPrice = 0;
    lastUpdated = '';
    color = 'black';
    updateTime = '';

    componentWillUpdate() {

        if (+this.stockPrice > +this.props.stockPrice) {
            this.color = 'red';
        } else if (+this.stockPrice < +this.props.stockPrice) {
            this.color = 'green';
        } else {
            this.color = 'black';
        }

        if (this.stockPrice !== this.props.stockPrice) {
            this.updateTime = this.props.updateTime;
        }

        this.stockName = this.props.stockName;
        this.stockPrice = this.props.stockPrice;
    }
    
    render() {
        var style = {
            color: this.color
        };
        return (
            <tr>
                <td>{this.stockName}</td>
                <td style={style}>{this.stockPrice}</td>
                <td>{this.updateTime}</td>
            </tr>
        );
    }
}