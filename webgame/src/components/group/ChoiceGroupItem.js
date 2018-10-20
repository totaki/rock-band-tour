import React from 'react';
import './ChoiceGroupItem.scss';
import Avatar from '../Avatar';


const ChoiceGroupItem = ({ group, onClick }) => {
    return (
        <div className="choice_group_item" onClick={onClick}>
            <Avatar avatar={group.avatar} size={'8em'}/>
        </div>
    )
};

export default ChoiceGroupItem;
