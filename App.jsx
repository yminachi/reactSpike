import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addUnicorn, updateLiveValue } from './actions/actions'
import onMessage from './webSocketClient'

import Header from './componants/Header.jsx'
import UnicornList from './componants/UnicornList.jsx'
import AddUnicorn from './componants/AddUnicorn.jsx'
import MagnetAdvice from './componants/MagnetAdvice.jsx'
import Toggle from './componants/Toggle.jsx'
import Live from './componants/Live.jsx'

class App extends React.Component {
    render() {
        const { dispatch, unicorns, live } = this.props;

        onMessage(function(message) {
            dispatch(updateLiveValue(message.body))
        });

        return(
            <div>
                <Header/>
                <AddUnicorn
                    onAddClick = { unicorn => dispatch(addUnicorn(unicorn)) }
                />
                <UnicornList unicorns={unicorns}/>

                <MagnetAdvice/>
                <Toggle/>
                <Live live={live}/>
            </div>
        );
    }
}

function select(state) {
    return {
        unicorns: state.unicorns,
        live: state.live
    }
}

export default connect(select)(App)
