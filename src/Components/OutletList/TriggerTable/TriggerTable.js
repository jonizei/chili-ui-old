import { Component } from 'react';
import './TriggerTable.css';
import TimeTriggerRow from './TimeTriggerRow/TimeTriggerRow';
import ConditionTriggerRow from './ConditionTriggerRow/ConditionTriggerRow';
import TriggerModal from '../../ControlPanelView/TriggerModal/TriggerModal';

class TriggerTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: props.showModal,
            triggerArray: props.triggers,
            openTriggerModal: props.openTriggerModal,
            addNewTrigger: props.addNewTrigger,
            deleteTrigger: props.deleteTrigger,
            newTrigger: props.newTrigger,
            openModal: props.openModal,
            closeModal: props.closeModal
        };

        this.getTriggerElements = this.getTriggerElements.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return {triggerArray: props.triggers, showModal: props.showModal, newTrigger: props.newTrigger};
    }

    getTriggerElements(array) {

        var temp = [];

        array.forEach(e => {

            if(e.type === 0) {
                temp.push(
                    <TimeTriggerRow
                        key={e.id} 
                        trigger={e}
                        deleteTrigger={this.state.deleteTrigger} />
                );
            }
            else if(e.type === 1) {
                temp.push(
                    <ConditionTriggerRow
                        key={e.id}
                        trigger={e}
                        deleteTrigger={this.state.deleteTrigger} />
                );
            }

        });

        return temp;
    }

    render() {
        return(
            <div className="w-100 p-1">
                <TriggerModal isOpen={this.state.showModal} onClose={this.state.closeModal} addTrigger={this.state.addNewTrigger} newTrigger={this.state.newTrigger}/>
                <button className="trigger-control-btn pl-3 pr-3" onClick={this.state.openModal}>Add New Trigger</button>
                
                <div>
                    <span className="trigger-table-title">Triggers</span>
                </div>

                <table className="trigger-table">
                    <tbody>
                        { this.getTriggerElements(this.state.triggerArray) }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default TriggerTable;