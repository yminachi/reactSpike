import React from 'react';

export default class AddUnicorn extends React.Component {
    render() {
        var itemStyle = {
            border: "1px solid #000000",
            margin: 10,
            padding: 10
        };

        return(
            <div style={itemStyle}>
                <p>Name: <input type = 'text' ref = 'name' /></p>
                <p>Magnetic: <input type="checkbox" ref="magnetic"/></p>
                <p>PowerLevel <input type = 'text' ref = 'powerLevel'/></p>

                <button onClick = {(e) => this.handleClick(e)}>
                    Add
                </button>
            </div>
        );
    }

    handleClick(e) {
        const name = this.refs.name.value.trim();
        const magnetic = this.refs.magnetic.checked;
        const powerLevel = this.refs.powerLevel.value.trim();
        this.props.onAddClick(  {
            name: name,
            magnetic: magnetic,
            powerLevel: powerLevel
        });

        this.refs.name.value = '';
        this.refs.powerLevel.value = '';
    }
}