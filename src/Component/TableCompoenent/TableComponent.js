import React from 'react';
import TableRowComponent from '../TableRowComponent/TableRowComponent';
import * as Constants from '../../Constants/constant_strings';
import './TableComponent.css'

export default class TableComponent extends React.Component {

    generateRows() {
        let rows = [];

        Object.keys(this.props.tableData).forEach(element => {
            rows.push(
                <TableRowComponent 
                    stockName={element} 
                    stockPrice={this.props.tableData[element]}
                    key={element}/>
            )
        });

        return rows;
    }

    render() {
        let rows = this.generateRows();

        return ( 
            <table>
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Price</th>
                        <th className={Constants.CSSStyleClass.TREND_BLOCK_CELL}>Trend</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            );
    }
}