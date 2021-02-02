import { Component } from 'react';
import './TriggerTable.css';
import TimeTriggerRow from './TimeTriggerRow/TimeTriggerRow';
import ConditionTriggerRow from './ConditionTriggerRow/ConditionTriggerRow';

class TriggerTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            triggers: []
        };
    }

    render() {
        return(
            <div className="w-100 p-1">
                <table>
                    <tr>
                        <td>
                            <button className="trigger-control-btn pl-3 pr-3">Add New Trigger(s)</button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }

}

export default TriggerTable;