import { Component } from 'react';
import TimeTriggerRow from './TimeTriggerRow/TimeTriggerRow';
import ConditionTriggerRow from './ConditionTriggerRow/ConditionTriggerRow';

class TriggerTable extends Component {

    constructor() {
        super();

        this.state = {
            triggers: []
        };
    }

    render() {
        return(
            <div className="w-100 p-1">
                <table>
                    <TimeTriggerRow />
                    <ConditionTriggerRow />
                </table>
            </div>
        );
    }

}

export default TriggerTable;