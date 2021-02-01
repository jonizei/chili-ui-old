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

    constructor() {
        super();

        this.state = {
            operations: [],
            sensors: []
        };

        this.createSensorOptions = this.createSensorOptions.bind(this);
        this.createOperationOptions = this.createOperationOptions.bind(this);
    }

    componentDidMount() {
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

    render() {
        return(
            <tr>
                <td>
                    <select className="sensor-select">
                        { this.state.sensors }
                    </select>
                </td>

                <td>
                    <select className="operation-select">
                        { this.state.operations }
                    </select>
                </td>

                <td>
                    <input type="number" className="value-input" />
                </td>
            </tr>
        );
    }

}

export default ConditionTriggerRow;