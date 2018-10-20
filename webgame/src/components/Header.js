import React, { Component } from 'react';
import Timer from './Timer';
import './Header.scss';

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
        return (
            <div className="main_header">
                <div className="main_header_left">
                    <div className="rating">
                        {stars(rating)}
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

export default Header;
