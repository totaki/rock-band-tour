import React from 'react';
import './ChoiceGroupItem.scss';
import Avatar from '../Avatar';


const ChoiceGroupItem = ({ group, onClick, current }) => {
    const style = !current ? {} : {
        'borderColor': 'rgba(216, 0, 0, 1)'
    };
    return (
        <div className="choice_group_item" onClick={onClick} style={style}>
            <div className="choice_group_item_info">
                {group.name}
            </div>
            <Avatar avatar={group.avatar} size={'16em'}/>
        </div>
    )
};

export default ChoiceGroupItem;
