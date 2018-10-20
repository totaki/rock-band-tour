import React from 'react';
import './Avatar.scss';

const Avatar = ({ avatar, size }) => {
    const style = {
        backgroundImage: `url(${avatar})`,
        height: size,
        width: '100%'
    };
    return (
        <div className="avatar" style={style}/>
    )
};

export default Avatar;
