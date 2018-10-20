import React from 'react';

const EventDetail = ({ date, location, volume, ticket_price }) => {
    return (
        <div className="event_detail">
            <span>Дата: {date}</span>
            <span>Место: {location}</span>
            <span>Вместительность: {volume}</span>
            <span>Цена билета: {ticket_price}</span>
        </div>
    )
};

export default EventDetail;
