import React, {Component} from 'react';
import Square from './Square';
import {isValidMovement} from '../apiRoutes/Movement';
import Knight from "./Knight";

class ChessBoard extends Component {
    constructor(props) {
        super(props);

        this.destinationPos = -1;
        this.state = {
            squares: []
        };
    }

    /* Handles the cell drag event (holds the cell index we on while dragging) */
    handleDrag = (sourceIndex) => {
        this.destinationPos = sourceIndex;
    };

    /* Handles the cell drop event (called right after drag is finished) */
    handleDrop = async (sourceIndex) => {
        const squares = {...this.state.squares};
        const isValid = await isValidMovement(sourceIndex, this.destinationPos);
        /* Validate movement with our API */
        if (isValid.data.result) {
            squares[this.destinationPos] = squares[sourceIndex];
            squares[sourceIndex] = null;
            this.setState({squares: squares});
        }
        /* API returns illegal movement */
        else {
            alert('Illegal move');
        }
    };

    /* Handles the board creation and style */
    initializeBoard = () => {
        let table = [];
        for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
            let children = [];
            for (let colIndex = 0; colIndex < 8; colIndex++) {
                let universalIndex = rowIndex * 8 + colIndex;
                let style = ((rowIndex + colIndex) % 8) % 2 === 0 ? '#595959' : '#f2f2f2';
                style = {backgroundColor: style};
                if (this.state.squares[universalIndex]) {
                    Object.assign(style, this.state.squares[universalIndex].style);
                }
                children.push(<td key={colIndex}>
                    <Square piece={this.state.squares[universalIndex]}
                            style={style}
                            handleDrag={() => this.handleDrag(universalIndex)}
                            handleDrop={() => this.handleDrop(universalIndex)}/>
                </td>);
            }
            table.push(<tr key={rowIndex}>{children}</tr>)
        }

        return table;
    };

    componentDidMount() {
        const squares = Array(64).fill(null);
        /* Choose the position you want for the Knight (Example here: 28) */
        squares[28] = new Knight();
        this.setState({squares: squares});
    }

    render() {
        return (
            <table>
                <tbody>
                {this.initializeBoard()}
                </tbody>
            </table>
        );
    }
}

export default ChessBoard;