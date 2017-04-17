import React from 'react';

import UnicornListItem from './UnicornListItem.jsx';

export default class UnicornList extends React.Component {
    constructor() {
        super();

        this.state = {
            unicorns: [
                {
                    "name": "Twinklehorn",
                    "magnetic": true,
                    "powerLevel": 9001
                },

                {
                    "name": "Steve",
                    "magnetic": false,
                    "powerLevel": 3
                },

                {
                    "name": "Uni McCornface",
                    "magnetic": true,
                    "powerLevel": 1000000
                },

                {
                    "name": "Charlie",
                    "magnetic": false,
                    "powerLevel": -5
                }
            ]
        }
    }

    render() {
        var itemStyle = {
            border: "1px solid #000000",
            margin: 10,
            padding: 10
        };

        return(
            <div style={itemStyle}>
                {this.state.unicorns.map((unicorn, i) => <UnicornListItem key = {i} unicorn = {unicorn} />)}
            </div>
        );
    }
}