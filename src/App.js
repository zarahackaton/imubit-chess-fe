import React from 'react';
import ChessBoard from './components/ChessBoard';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValidMovement: false
        };
    }

    render() {
        return (
            <div className="App">
                <ChessBoard/>
            </div>
        );
    }
}

export default App;
