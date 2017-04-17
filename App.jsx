import React from 'react';

import Header from './Header.jsx'
import UnicornList from './UnicornList.jsx'
import MagnetAdvice from './MagnetAdvice.jsx'
import Toggle from './Toggle.jsx'


class App extends React.Component {
    render() {
        var box1 = <MagnetAdvice/>;
        var box2 = <UnicornList/>;
        var box3 = <Toggle/>;

        return(
            <div>
                <Header/>
                {box1}
                {box2}
                {box3}
            </div>
        );
    }
}

export default App;