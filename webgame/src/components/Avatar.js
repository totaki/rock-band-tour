import React from 'react';
import './Avatar.scss';

const Avatar = ({ avatar, size, onClick=()=> {} }) => {
    const style = {
        backgroundImage: `url(${avatar})`,
        height: size,
        width: '100%',
        cursor: "pointer"
    };
    return (
        <div className="avatar" style={style} onClick={() => onClick()}/>
    )
};

export default Avatar;
