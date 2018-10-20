import React, { Component } from 'react';
import Timer from './Timer';
import './Header.scss';
import Avatar from "./Avatar";
import {showGroupInfo} from "../controller";
import connect from "react-redux/es/connect/connect";

const rating = 3;

const stars = (rating) => {
    const _stars = [];
    for (var i=1; i <= rating; i++) {
        _stars.push(<span className="fill" key={`start-${i}`}>☆</span>)
    }
    for (;i <=5; i++) {
        _stars.push(<span key={`start-${i}`}>☆</span>)
    }
    return _stars
};

class Header extends Component {
    render() {
        const { avatar, _showGroupInfo } = this.props;
        return (
            <div className="main_header">
                <div className="main_header_left">
                    <div>
                        <div className="rating">
                            {stars(rating)}
                        </div>
                        <Avatar onClick={() => _showGroupInfo()} avatar={avatar} size={'12em'}/>
                    </div>
                    <Timer/>
                </div>
                <div className="money">
                    &#8381; {10000}
                </div>
            </div>
        )
    }
}

function mapStateToDispatch(dispatch) {
    return {
        _showGroupInfo: () => dispatch(showGroupInfo(true)),
    };
}

export default connect(null, mapStateToDispatch)(Header);
