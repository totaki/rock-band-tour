import React, { Component } from 'react';
import ChoiceGroupItem from '../components/group/ChoiceGroupItem';
import MainButton from '../components/button/MainButton';
import defaults from '../defaults'
import './ChoiceGroup.scss'

const GROUPS = defaults.groups;

class ChoiceGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {groupIndex: null};
        this.setGroupIndex = this.setGroupIndex.bind(this)
    }

    setGroupIndex(i) {
        this.setState({groupIndex: i})
    }

    render() {
        const { groupIndex } = this.state;
        return (
            <div className="choice_group_container">
                <div>
                    <h1>Выберите группу</h1>
                    <div className="choice_group_items">
                        {
                            GROUPS.map((i) => <ChoiceGroupItem group={i}
                                                               current={i.id === groupIndex}
                                                               onClick={() => this.setGroupIndex(i.id)}
                                                               key={`group-choice-${i.id}`}/>)
                        }
                    </div>
                </div>
                <MainButton title="START"/>
            </div>
        );
    }
}

export default ChoiceGroup;
