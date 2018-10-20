import React from 'react';
import './ChoiceGroupItem.scss';
import Avatar from '../Avatar';


const ChoiceGroupItem = ({ group, onClick, current }) => {
    const style = !current ? {} : {
        'borderColor': '#FFFFFF',
        'borderStyle': 'dashed',

    };
    return (
        <div className="choice_group_item" onClick={onClick} style={style}>
            <Avatar className={`avatar_${group.id}`} avatar={group.avatar} size={'256px'}/>
            <div className="choice_group_item_info">
                {group.name}
            </div>
        </div>
    )
};

export default ChoiceGroupItem;
