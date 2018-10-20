import React from 'react';
import './Avatar.scss';

const Avatar = ({ avatar, size }) => {
    const style = {
        backgroundImage: `url(${avatar})`,
        height: size,
        width: size
    };
    return (
        <div className="avatar" style={style}/>
    )
};

export default Avatar;
