import React from 'react';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <h1>React Spike</h1>
        );
    }
}

class Content extends React.Component {
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

class UnicornListItem extends React.Component {
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

export default App;