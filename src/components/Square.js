import React, {Component} from 'react';

class Square extends Component {
    constructor(props) {
        super(props);

        this.style = {
            width: '10vh',
            height: '10vh',
            borderColor: 'grey',
            backgroundSize: 'cover'
        };
    }

    /*
     Setting style combining props and state styles.
    */
    styleCell = () => {
        const style = {...this.style};
        Object.assign(style, this.props.style);
        return style;
    };

    render() {
        const style = this.styleCell();
        return (
            <button style={style} onDragEnter={this.props.handleDrag}
                    onDragEnd={this.props.handleDrop} draggable={this.props.piece ? "true" : "false"}>
            </button>
        );
    }
}

export default Square;