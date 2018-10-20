import React, { Component } from 'react';
import './MainButton.scss';

class MainButton extends Component {
    constructor(props) {
        super(props);
        this._btn = React.createRef();
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        const { onClick } = this.props;
        if (onClick) {onClick(e)}

    }

    render() {
        const { title } = this.props;
        return (
            <div ref={this._btn} onClick={this.onClick} className="main_button">
                <div>
                    <span>{title}</span>
                </div>
            </div>
        )
    }
}

export default MainButton;
