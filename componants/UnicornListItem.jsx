import React from 'react';

export default class UnicornListItem extends React.Component {
    render() {
        return (
            <div className="component">
                <p><b>Name: </b>{this.props.unicorn.name}</p>
                <p><b>Magnetic: </b>{this.props.unicorn.magnetic == true ? "It's Magnetic!" : "Not Magnetic :("}</p>
                <p><b>Power Level: </b>{this.props.unicorn.powerLevel}</p>
            </div>
        )
    }
}

UnicornListItem.propTypes = {
    unicorn: React.PropTypes.object.isRequired
};