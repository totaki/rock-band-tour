import React from 'react';
import './ChoiceGroupItem.scss';

const ChoiceGroupItem = ({ group }) => {
    return (
        <div className="choice_group_item">
            {group.name}
        </div>
    )
};

export default ChoiceGroupItem;
