import React from 'react';

import UnicornList from './UnicornList.jsx'

export default class Toggle extends React.Component {
    constructor() {
        super();

        this.state = {
            backgroundOn: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            backgroundOn: !prevState.backgroundOn
        }));
    }

    render() {
        var itemStyle = {
            backgroundColor: this.state.backgroundOn ? "#ff0000": "#ffffff"
        };

        return(
            <div  className="component" style={itemStyle}>
                <button onClick={this.handleClick}>Press Me!</button>
            </div>
        );
    }
}