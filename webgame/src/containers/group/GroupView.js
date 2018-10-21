import React, {Component} from 'react';
import './GroupView.scss'
import MemberItem from '../../components/member/MemberItem';

class GroupInfo extends Component {
    render() {
        const {group} = this.props;
        return (
            <div className="group_view_container">
                <div>
                    <div className="group_members">
                        {
                            group.members.map((i) => <MemberItem member={i}
                                                           onClick={() => {}}
                                                           key={`group-choice-${i.id}`}/>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupInfo;

