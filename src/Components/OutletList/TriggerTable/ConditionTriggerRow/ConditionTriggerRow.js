import { Component } from 'react';
import './ConditionTriggerRow.css';

class ConditionTriggerRow extends Component {

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

    constructor(props) {
        super(props);

        this.state = {
            trigger: props.trigger,
            deleteTrigger: props.deleteTrigger
        };

        this.getSensor = this.getSensor.bind(this);
        this.getOperation = this.getOperation.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return {trigger: props.trigger};
    }

    
    getSensor(sensor) {

        if(sensor > -1 && sensor < this.sensorArray.length) {
            return this.sensorArray[sensor];
        }

        return "";
    }

    getOperation(operation) {

        if(operation > -1 && operation < this.operationArray.length) {
            return this.operationArray[operation];
        }

        return "";
    }

    render() {
        return(
            <tr>
                <td>CONDITION</td>

                <td>
                    { this.getSensor(this.state.trigger.sensor) }
                </td>

                <td>
                    { this.getOperation(this.state.trigger.operation) }
                </td>

                <td>
                    { this.state.trigger.value }
                </td>

                <td>
                    <button className="trigger-control-btn" onClick={() => this.state.deleteTrigger(this.state.trigger.id)}>Delete</button>
                </td>
            </tr>
        );
    }

}

export default ConditionTriggerRow;