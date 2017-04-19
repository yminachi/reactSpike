import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUnicorn } from './actions/actions'

import Header from './componants/Header.jsx'
import UnicornList from './componants/UnicornList.jsx'
import AddUnicorn from './componants/AddUnicorn.jsx'
import MagnetAdvice from './componants/MagnetAdvice.jsx'
import Toggle from './componants/Toggle.jsx'

class App extends React.Component {
    render() {
        const { dispatch, unicorns } = this.props;

        return(
            <div>
                <Header/>
                <AddUnicorn
                    onAddClick = { unicorn => dispatch(addUnicorn(unicorn)) }
                />
                <UnicornList unicorns={unicorns}/>

                <MagnetAdvice/>
                <Toggle/>

            </div>
        );
    }
}

function select(state) {
    return {
        unicorns: state.unicorns
    }
}

export default connect(select)(App)