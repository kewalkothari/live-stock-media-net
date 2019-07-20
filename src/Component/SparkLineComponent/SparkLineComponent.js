import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';

export default class TableRowComponent extends React.Component {

    render() {
        return (    
                <Sparklines data={this.props.stockHistory} limit={30}>
                    <SparklinesLine color="blue" style={{ fill: "none" }}/>
                    <SparklinesSpots />
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>
                );
    }
}