import React, {Component} from 'react';
import './Store.scss'

class GameStore extends Component {
    render() {
        return (
            <div className="group_view_container">
                <div className="seller"></div>
                <div className="items">
                    <div className="instruments"></div>
                    <div className="transfer"></div>
                </div>
            </div>
        );
    }
}

export default GameStore;
