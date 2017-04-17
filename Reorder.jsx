import React from 'react';

export default class Reorder extends React.Component {
    constructor() {
        super();

        this.state = {
            backgroundOn: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            backgroundOn: !prevState.backgroundOn
        }));
    }

    render() {
        var itemStyle = {
            border: "1px solid #000000",
            margin: 10,
            padding: 10,
            backgroundColor: this.state.backgroundOn ? "#ff0000": "#ffffff"
        };

        return(
            <div style={itemStyle}>
                <button onClick={this.handleClick}>Press Me!</button>
            </div>
        );
    }
}