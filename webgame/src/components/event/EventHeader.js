import React from 'react';
import './EventHeader.scss';

const EventHeader = ({ date, time, money }) => {
    return (
        <div className="event_header">
            <img src="/assets/images/stars.svg" alt=""/>
            <span>{date}</span>
            <span>{time}</span>
            <span>{money}</span>
        </div>
    )
};

export default EventHeader;
