import { Component } from 'react';
import Modal from 'react-modal';
import TimeTriggerRow from '../../OutletList/TriggerTable/TimeTriggerRow/TimeTriggerRow';
import ConditionTriggerRow from '../../OutletList/TriggerTable/ConditionTriggerRow/ConditionTriggerRow';
import './TriggerModal.css';
import MyTimePicker from '../../OutletList/TriggerTable/MyTimePicker/MyTimePicker';

class TriggerModal extends Component {

    weekdayArray = [
        "EVERYDAY"
        , "MONDAY"
        , "TUESDAY"
        , "WEDNESDAY"
        , "THURSDAY"
        , "FRIDAY"
        , "SATURDAY"
        , "SUNDAY"
    ];

    operationArray = [
        "NO OPERATION"
        , "LOWER"
        , "EQUALS"
        , "GREATER"
    ];

    sensorArray = [
        "NO SENSOR"
        , "AIR_TEMP"
        , "AIR_PRES"
        , "HUMIDITY"
        , "LIGHT"
    ];

    emptyTrigger = {
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

    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen,
            onClose: props.onClose,
            addTrigger: props.addTrigger,
            newTrigger: this.emptyTrigger,
            weekdays: [],
            operations: [],
            sensors: []
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.getTimeTriggerForm = this.getTimeTriggerForm.bind(this);
        this.getConditionTriggerForm = this.getConditionTriggerForm.bind(this);
        this.createSensorOptions = this.createSensorOptions.bind(this);
        this.createOperationOptions = this.createOperationOptions.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return {isOpen: props.isOpen};
    }

    componentDidMount() {
        this.createWeekdayOptions();
        this.createSensorOptions();
        this.createOperationOptions();
    }

    createSensorOptions() {

        var sensorOptions = [];
        for(var i = 0; i < this.sensorArray.length; i++) {
            sensorOptions.push(<option key={i} value={i}>{ this.sensorArray[i] }</option>);
        }

        this.setState({sensors: sensorOptions});
    }

    createOperationOptions() {

        var operationOptions = [];
        for(var i = 0; i < this.operationArray.length; i++) {
            operationOptions.push(<option key={i} value={i}>{ this.operationArray[i] }</option>);
        }

        this.setState({operations: operationOptions});
    }

    createWeekdayOptions() {

        var weekdayOptions = [];
        for(var i = 0; i < this.weekdayArray.length; i++) {
            weekdayOptions.push(<option key={i} value={i}>{ this.weekdayArray[i] }</option>);
        }

        this.setState({weekdays: weekdayOptions});
    }

    getTimeTriggerForm() {
        return(
            <div className="time-trigger-form">
                <div className="time-form-component">
                    <label>Select weekday:</label>
                    <div>
                        <select name="weekSelect" className="my-select-box" onChange={this.handleOnChange}>
                            { this.state.weekdays }
                        </select>
                    </div>
                </div>
                <div className="time-form-component">
                    <label>Select time:</label>
                    <div>
                        <MyTimePicker onTimeChange={this.onTimeChange} onChange={this.handleOnChange}/>
                    </div>
                </div>
                <div className="time-form-component">
                    <label>Set duration:</label>
                    <div>
                        <input type="number" name="triggerDuration" className="duration-input" onChange={this.handleOnChange}/>
                        <span className="p-1">Minutes</span>
                    </div>
                </div>
            </div>
        );
    }

    onTimeChange = e => {

        var tempState = this.state.newTrigger;

        if(e.target.name === 'hourSelect') {
            tempState.time.hour = parseInt(e.target.value);
            this.setState(tempState);
        }
        else if(e.target.name === 'minuteSelect') {
            tempState.time.minutes = parseInt(e.target.value);
            this.setState(tempState);
        }

    }

    handleOnChange = e => {

        var tempState = this.state.newTrigger;
        switch(e.target.name) {
            case "typeSelect":
                tempState.type = parseInt(e.target.value);
                tempState = {newTrigger: tempState};
                break;

            case "sensorSelect":
                tempState.sensor = parseInt(e.target.value);
                tempState = {newTrigger: tempState};
                break;
            
            case "operationSelect":
                tempState.operation = parseInt(e.target.value);
                tempState = {newTrigger: tempState};
                break;

            case "triggerValue":
                tempState.value = parseInt(e.target.value);
                tempState = {newTrigger: tempState};
                break;

            case "weekSelect":
                tempState.weekday = parseInt(e.target.value);
                tempState = {newTrigger: tempState};
                break;

            case "triggerDuration":
                tempState.duration = parseInt(e.target.value);
                tempState = {newTrigger: tempState};
                break;
        }

        this.setState({tempState});
    }

    getConditionTriggerForm() {
        return(
            <div className="condition-trigger-form">
                <div className="condition-form-component">
                    <label>Select sensor:</label>
                    <div>
                        <select name="sensorSelect" className="my-select-box" onChange={this.handleOnChange}>
                            { this.state.sensors }
                        </select>
                    </div>
                </div>
                <div className="condition-form-component">
                    <label>Select operation:</label>
                    <div>
                        <select name="operationSelect" className="my-select-box" onChange={this.handleOnChange}>
                            { this.state.operations }
                        </select>
                    </div>
                </div>
                <div className="condition-form-component">
                    <label>Set value:</label>
                    <div>
                        <input type="number" name="triggerValue" className="value-input" onChange={this.handleOnChange} />
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return(
            <Modal
                isOpen={this.state.isOpen}
                contentLable="Trigger Creator Modal"
                className="trigger-modal-container">

                <div className="trigger-modal">
                    <div className="w-100">
                        <select name="typeSelect" className="my-select-box" onChange={this.handleOnChange}>
                            <option value={0}>TIME</option>
                            <option value={1}>CONDITION</option>
                        </select>
                    </div>
                    <div className="w-100">
                        { this.state.newTrigger.type === 1 ? this.getConditionTriggerForm() : this.getTimeTriggerForm() }
                    </div>
                    <div className="w-100 trigger-modal-submit">
                        <button className="trigger-control-btn pl-3 pr-3" onClick={this.state.onClose}>Cancel</button>
                        <button className="trigger-control-btn pl-3 pr-3" onClick={() => this.state.addTrigger(this.state.newTrigger)}>Add</button>
                    </div>
                </div>

            </Modal>
        );
    }

}

export default TriggerModal;