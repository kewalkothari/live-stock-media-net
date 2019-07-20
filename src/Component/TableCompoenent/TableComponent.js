import React from 'react';
import TableRowComponent from '../TableRowComponent/TableRowComponent';

export default class TableComponent extends React.Component {

    generateRows() {
        let rows = [];
        let date = new Date();

        Object.keys(this.props.tableData).forEach(element => {
            rows.push(
                <TableRowComponent 
                    stockName={element} 
                    stockPrice={this.props.tableData[element]}
                    updateTime={date.getTime()}/>
            )
        });

        return rows;
    }

    render() {
        let rows = this.generateRows();
        var keys = [];
        for(var k in this.props.tableData) keys.push(k);
        return ( 
            <table border="1px" cellSpacing="0">
                <thead>
                    <th>Ticker</th>
                    <th>Price</th>
                    <th>Last Updated</th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            );
    }
}