import React, {Component} from 'react';
import './Avatar.scss';

const Avatar = ({ className, avatar, size, onClick=()=> {} }) => {
    const style = {
        height: size,
        width: '100%',
        cursor: "pointer"
    };
    const classes = `avatar ${className}`;
    return (
        <div className={classes} style={style} onClick={() => onClick()}/>
    )
};

export default Avatar;
