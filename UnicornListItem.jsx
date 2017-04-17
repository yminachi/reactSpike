import React from 'react';

export default class UnicornListItem extends React.Component {
    render() {
        var itemStyle = {
            border: "1px solid #000000",
            margin: 10,
            padding: 10
        };

        return (
            <div style={itemStyle}>
                <p><b>Name: </b>{this.props.unicorn.name}</p>
                <p><b>Magnetic: </b>{this.props.unicorn.magnetic == true ? "It's Magnetic!" : "Not Magnetic :("}</p>
                <p><b>Power Level: </b>{this.props.unicorn.powerLevel}</p>
            </div>
        )
    }
}