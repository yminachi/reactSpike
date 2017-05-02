import React from 'react';

export default class Live extends React.Component {
    render() {
        return (
            <div className="component">Live Unicorn Names: <b><i>{this.props.live}</i></b></div>
        )
    }
}
