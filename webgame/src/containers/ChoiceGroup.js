import React, { Component } from 'react';
import { connect } from "react-redux";
import ChoiceGroupItem from '../components/group/ChoiceGroupItem';
import MainButton from '../components/button/MainButton';
import defaults from '../defaults'
import { setGroup, startGame } from "../controller";
import './ChoiceGroup.scss'

const GROUPS = defaults.groups;

class ChoiceGroup extends Component {

    render() {
        const { groupIndex, setGroupIndex, startGame } = this.props;
        return (
            <div className="choice_group_container">
                <div>
                    <h1>Выберите группу</h1>
                    <div className="choice_group_items">
                        {
                            GROUPS.map((i) => <ChoiceGroupItem group={i}
                                                               current={i.id === groupIndex}
                                                               onClick={() => setGroupIndex(i.id)}
                                                               key={`group-choice-${i.id}`}/>)
                        }
                    </div>
                </div>
                <MainButton title="START" onClick={startGame}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        groupIndex: state[0].groupIndex
    };
}

function mapStateToDispatch(dispatch) {
    return {
        setGroupIndex: (i) => dispatch(setGroup(i)),
        startGame: () => dispatch(startGame())
    };
}

export default connect(
    mapStateToProps,
    mapStateToDispatch
)(ChoiceGroup);
