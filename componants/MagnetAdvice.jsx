import React from 'react';

export default class MagnetAdvice extends React.Component {

    render() {
        var itemStyle = {
            border: "1px solid #000000",
            margin: 10,
            padding: 10
        };

        return (
            <div style={itemStyle}>
                <h2>Advice for magnets:</h2>
                <ul>
                    <li>Don't eat magnets</li>
                </ul>
            </div>
        )
    }
}