import React from 'react';

import UnicornListItem from './UnicornListItem.jsx';

export default class UnicornList extends React.Component {
    constructor() {
        super();
    }

    render() {
        var itemStyle = {
            border: "1px solid #000000",
            margin: 10,
            padding: 10
        };
        console.log(this.props.unicorns);

        return(
            <div style={itemStyle}>
                {this.props.unicorns.map((unicorn, i) => <UnicornListItem key = {i} unicorn = {unicorn} />)}
            </div>
        );
    }
}

UnicornList.defaultProps = {
    unicorns: [ {
        "name": "No Unicorns available",
        "magnetic": false,
        "powerLevel": 0
    } ]
};