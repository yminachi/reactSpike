import React from 'react';

import UnicornListItem from './UnicornListItem.jsx';

export default class UnicornList extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props.unicorns);

        return(
            <div className="component">
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