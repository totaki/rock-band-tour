import React, {Component} from 'react';
import './Avatar.scss';

const Avatar = ({ className, avatar, size, onClick=()=> {} }) => {
    const style = {
        height: size,
        width: '100%',
        cursor: "pointer"
    };
    if (avatar) {
        style.backgroundImage = `url(${avatar})`;
    }

    const classes = className? `avatar ${className}` : 'avatar';
    return (
        <div className={classes} style={style} onClick={() => onClick()}/>
    )
};

export default Avatar;
