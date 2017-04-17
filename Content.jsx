import React from 'react';

import UnicornListItem from './UnicornListItem.jsx';

export default class Content extends React.Component {
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
        return(
            <div>
                {this.state.unicorns.map((unicorn, i) => <UnicornListItem key = {i} unicorn = {unicorn} />)}
            </div>
        );
    }
}