import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';

export default class TableRowComponent extends React.Component {

    render() {
        return (    
                <Sparklines data={this.props.stockHistory} limit={30}>
                    <SparklinesLine color="blue" style={{ fill: "none" }}/>
                    <SparklinesSpots />
                    <SparklinesBars />
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>
                );
    }
}