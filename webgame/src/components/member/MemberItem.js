import React from 'react';
import './MemberItem.scss';
import Avatar from '../Avatar';


const MemberItem = ({ member, onClick, current }) => {
    return (
        <div className="member_item" onClick={onClick}>
            <div className="member_name">{member.name}</div>
            <Avatar avatar={member.avatar} size={'256px'}/>
        </div>
    )
};

export default MemberItem;
