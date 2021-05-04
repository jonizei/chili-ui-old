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
            triggerArray: [],
            openTriggerModal: props.openTriggerModal,
            newTrigger: {},
            nextId: 1
        };

        this.addNewTrigger = this.addNewTrigger.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.getTriggerElements = this.getTriggerElements.bind(this);
        this.deleteTrigger = this.deleteTrigger.bind(this);
    }

    componentDidMount() {
        this.setState({newTrigger: TriggerTable.createEmptyTrigger()});
    }

    componentDidUpdate() {
        console.log(this.state.triggerArray);
    }

    addNewTrigger(trigger) {
        var temp = this.state.triggerArray;
        trigger.id = this.state.nextId;
        temp.push(trigger);

        this.setState({
            triggerArray: temp, 
            showModal: false, 
            newTrigger: TriggerTable.createEmptyTrigger(),
            nextId: this.state.nextId + 1
        });
    }

    getTriggerElements(array) {

        var temp = [];

        array.forEach(e => {

            if(e.type === 0) {
                temp.push(
                    <TimeTriggerRow 
                        trigger={e}
                        deleteTrigger={this.deleteTrigger} />
                );
            }
            else if(e.type === 1) {
                temp.push(
                    <ConditionTriggerRow
                        trigger={e}
                        deleteTrigger={this.deleteTrigger} />
                );
            }

        });

        return temp;
    }

    static createEmptyTrigger() {
        var temp = {
            id: 0,
            type: 0,
            weekday: 0,
            sensor: 0,
            operation: 0,
            value: 0,
            duration: 0,
            time: {
                hour: 0,
                minutes: 0
            }
        };
        return temp;
    }

    openModal = e => {
        this.setState({showModal: true});
    }

    closeModal = e => {
        this.setState({showModal: false});
    }

    deleteTrigger(id) {
        console.log(id);
    }

    render() {
        return(
            <div className="w-100 p-1">
                <TriggerModal isOpen={this.state.showModal} onClose={this.closeModal} addTrigger={this.addNewTrigger} newTrigger={this.state.newTrigger}/>
                <button className="trigger-control-btn pl-3 pr-3" onClick={this.openModal}>Add New Trigger</button>
                
                <div>
                    <span className="trigger-table-title">Triggers</span>
                </div>

                <table className="trigger-table">
                    { this.getTriggerElements(this.state.triggerArray) }
                </table>
            </div>
        );
    }

}

export default TriggerTable;