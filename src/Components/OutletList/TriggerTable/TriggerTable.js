import { Component } from 'react';
import './TriggerTable.css';
import TimeTriggerRow from './TimeTriggerRow/TimeTriggerRow';
import ConditionTriggerRow from './ConditionTriggerRow/ConditionTriggerRow';
import TriggerModal from '../../ControlPanelView/TriggerModal/TriggerModal';

class TriggerTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            triggers: [],
            openTriggerModal: props.openTriggerModal
        };

        this.addNewTrigger = this.addNewTrigger.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    addNewTrigger(trigger) {
        var temp = this.state.triggers;
        temp.push(trigger);
        console.log(temp);
        this.setState({triggers: temp, showModal: false});
    }

    openModal = e => {
        this.setState({showModal: true});
    }

    closeModal = e => {
        this.setState({showModal: false});
    }

    render() {
        return(
            <div className="w-100 p-1">
                <TriggerModal isOpen={this.state.showModal} onClose={this.closeModal} addTrigger={this.addNewTrigger}/>
                <button className="trigger-control-btn pl-3 pr-3" onClick={this.openModal}>Add New Trigger</button>
                
                <div>
                    <span className="trigger-table-title">Triggers</span>
                </div>

                <table className="trigger-table">
                    
                </table>
            </div>
        );
    }

}

export default TriggerTable;