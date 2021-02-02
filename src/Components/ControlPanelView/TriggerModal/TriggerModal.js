import { Component } from 'react';
import Modal from 'react-modal';
import TimeTriggerRow from './TimeTriggerRow/TimeTriggerRow';
import ConditionTriggerRow from './ConditionTriggerRow/ConditionTriggerRow';

class TriggerModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen,
            onClose: props.onClose,
            triggers: [],
            triggerType: 0
        };

        this.handleAddTrigger = this.handleAddTrigger.bind(this);
    }

    handleAddTrigger() {
        if(this.state.triggerType === 0) {
            var tempTriggers = this.state.triggers;
            tempTriggers.push(<TimeTriggerRow />);
            this.setState({triggers: tempTriggers});
        }
        else if(this.state.triggerType === 1) {
            var tempTriggers = this.state.triggers;
            tempTriggers.push(<ConditionTriggerRow />);
            this.setState({triggers: tempTriggers});
        }
    }

    handleOnChange = e => {
        this.setState({triggerType: e.target.value});
    }

    render() {
        return(
            <Modal
                isOpen={this.state.isOpen}
                contentLable="Trigger Creator Modal">

                <div className="w-100 p-1">
                    <table>
                        <tr>
                            <td>
                                <select className="my-select-box" onChange={}>
                                    <option value={0}>TIME</option>
                                    <option value={1}>CONDITION</option>
                                </select>
                            </td>
                            <td>
                                <button className="trigger-control-btn pl-3 pr-3" onClick={this.handleAddTrigger}>Add</button>
                            </td>
                        </tr>

                        {this.state.triggers}

                    </table>
                </div>

            </Modal>
        );
    }

}

export default TriggerModal;