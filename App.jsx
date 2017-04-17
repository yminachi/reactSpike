import React from 'react';

import Header from './Header.jsx'
import UnicornList from './UnicornList.jsx'
import MagnetAdvice from './MagnetAdvice.jsx'
import Button from './Button.jsx'


class App extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <MagnetAdvice/>
                <UnicornList/>
                <Button/>
            </div>
        );
    }
}

export default App;