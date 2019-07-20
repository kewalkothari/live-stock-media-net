import React from 'react';
import SparkLineComponent from '../SparkLineComponent/SparkLineComponent';

import './TableRowComponent.css';

export default class TableRowComponent extends React.Component {

    stockName = '';
    stockPrice = -1;
    lastUpdated = '';
    colorClass = '';
    updateTimeStamp = 0;
    stockHistory = []

    constructor(props) {
        super(props)
        this.stockName = props.stockName;
        this.stockPrice = props.stockPrice;
        this.updateTimeStamp = new Date();
    }

    formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        seconds = seconds < 10 ? '0'+seconds : seconds;
        var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        return strTime;
    }

    render() {
        if (this.stockPrice !== -1) {
            if (+this.stockPrice > +this.props.stockPrice) {
                this.colorClass = 'decreasePrice';
            } else if (+this.stockPrice < +this.props.stockPrice) {
                this.colorClass = 'increasePrice';
            } else {
                this.colorClass = '';
            }
        }

        if (this.stockPrice !== this.props.stockPrice) {
            this.updateTimeStamp = new Date();
            this.stockPrice = this.props.stockPrice;
        } 

        this.stockHistory.push(this.stockPrice);

        return (
            <tr>
                <td>{this.stockName}</td>
                <td className={this.colorClass}>{this.stockPrice}</td>
                <td className={'chartBackground'}>
                    <SparkLineComponent stockHistory={this.stockHistory} />
                </td>
                <td>{this.formatAMPM(this.updateTimeStamp)}</td>
            </tr>
        );
    }
}