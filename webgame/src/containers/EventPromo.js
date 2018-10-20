import React from 'react';
import ChoiceGroupItem from "../components/group/ChoiceGroupItem";

const EventPromo = ({ options }) => {
    return (
        <div className="event_promo">
        {
            options.map((i) => <ChoiceGroupItem />)
        }
        </div>
    )
};

export default EventPromo;
