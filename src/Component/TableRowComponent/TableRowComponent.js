import React from 'react';
import SparkLineComponent from '../SparkLineComponent/SparkLineComponent';
import * as Constants from '../../Constants/constant_strings';
import './TableRowComponent.css';

export default class TableRowComponent extends React.Component {

    stockName = Constants.StringUtility.EMPTY;
    stockPrice = -1;
    stockHistory = [];
    colorClass = Constants.StringUtility.EMPTY;
    updateTimeStamp = 0;

    constructor(props) {
        super(props)
        this.stockName = props.stockName;
        this.stockPrice = props.stockPrice;
        this.updateTimeStamp = new Date();
    }

    /**
     * Updates the date/time in AM PM format.
     * 
     * @param {Date} date 
     */
    formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = hours >= 12 ? Constants.TimeString.PM : Constants.TimeString.AM;
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? Constants.TimeString.ZERO + minutes : minutes;
        seconds = seconds < 10 ? Constants.TimeString.ZERO + seconds : seconds;
        let strTime = hours + Constants.StringUtility.COLON + minutes + Constants.StringUtility.COLON 
                        + seconds + Constants.StringUtility.SPACE + ampm;

        return strTime;
    }

    /**
     * Updates cell data after checking if required.
     * 
     * @param {number} updatedStockPrice 
     */
    updateCellState(updatedStockPrice) {
        if (this.stockPrice !== -1) {
            if (+this.stockPrice > +updatedStockPrice) {
                this.colorClass = Constants.CSSStyleClass.PRICE_DECREASE_BACKGROUND;
            } else if (+this.stockPrice < +updatedStockPrice) {
                this.colorClass = Constants.CSSStyleClass.PRICE_INCREASE_BACKGROUND;
            } else {
                this.colorClass = Constants.StringUtility.EMPTY;
            }
        }

        if (this.stockPrice !== updatedStockPrice) {
            this.updateTimeStamp = new Date();
            this.stockPrice = updatedStockPrice;
        } 

        this.stockHistory.push(this.stockPrice);
    }

    render() {
        this.updateCellState(this.props.stockPrice);

        return (
            <tr>
                <td>{this.stockName}</td>
                <td className={this.colorClass}>{this.stockPrice}</td>
                <td className={Constants.CSSStyleClass.CHART_CELL_BACKGROUND}>
                    <SparkLineComponent stockHistory={this.stockHistory} />
                </td>
                <td>{this.formatAMPM(this.updateTimeStamp)}</td>
            </tr>
        );
    }
}