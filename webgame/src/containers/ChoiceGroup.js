import React, { Component } from 'react';
import ChoiceGroupItem from '../components/group/ChoiceGroupItem';
import MainButton from '../components/button/MainButton';
import defaults from '../defaults'
import './ChoiceGroup.scss'

const GROUPS = defaults.groups;

class ChoiceGroup extends Component {
    render() {
        return (
            <div className="choice_group_container">
                <h1>Выберите группу</h1>
                <div>
                    <div className="choice_group_items">
                        <ChoiceGroupItem group={GROUPS[0]}/>
                        <ChoiceGroupItem group={GROUPS[1]}/>
                    </div>
                </div>
                <MainButton/>
            </div>
        );
    }
}

export default ChoiceGroup;
