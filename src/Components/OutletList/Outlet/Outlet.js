import { Component } from 'react';
import './Outlet.css';
import TriggerTable from '../TriggerTable/TriggerTable';

class Outlet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            outlet: props.outlet,
            nextId: 1,
            showModal: false,
            newTrigger: {},
            updateOutlet: props.updateOutlet
        };

        this.addNewTrigger = this.addNewTrigger.bind(this);
        this.deleteTrigger = this.deleteTrigger.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.getNextId = this.getNextId.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount() {
        this.setState({newTrigger: Outlet.createEmptyTrigger(), nextId: this.getNextId(this.state.outlet.triggers)});
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

    getNextId(triggers) {
        var max = 0;
        triggers.forEach(e => {
            if(e.id > max)
                max = e.id;
        });
        return max + 1;
    }

    openModal = e => {
        this.setState({showModal: true});
    }

    closeModal = e => {
        this.setState({showModal: false});
    }

    addNewTrigger(trigger) {
        var temp = this.state.outlet.triggers;
        trigger.id = this.state.nextId;
        temp.push(trigger);

        var tmpOutlet = this.state.outlet;
        tmpOutlet.triggers = temp;

        this.setState({
            showModal: false, 
            newTrigger: Outlet.createEmptyTrigger(),
            outlet: tmpOutlet, 
            nextId: this.state.nextId + 1
        }, () => this.state.updateOutlet(this.state.outlet));
    }

    deleteTrigger(id) {
        var tmpOutlet = this.state.outlet;
        var temp = tmpOutlet.triggers.filter(e => e.id !== id);
        tmpOutlet.triggers = temp;
        this.setState({
            outlet: tmpOutlet
        }, () => this.state.updateOutlet(this.state.outlet));
    }

    handleToggle = e => {

        if(e.target.name === "outletToggle") {
            var temp = this.state.outlet;
            temp.stay_on = !temp.stay_on;
            this.setState({
                outlet: temp
            }, () => this.state.updateOutlet(this.state.outlet));
        }

    }

    render() {
        return(
            <div className="w-100 outlet-container mb-2">
                <div className="w-100 d-flex flex-row outlet-details-container p-1">
                    <div className="w-50">
                        <span className="outlet-details">{ this.state.outlet.name }</span>
                    </div>
                    <div className="w-50 d-flex justify-content-end">
                        <label className="toggle-switch">
                            <input type="checkbox" name="outletToggle" defaultChecked={ this.state.outlet.stay_on } onChange={this.handleToggle} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="outlet-status-container w-100">
                    <span className="outlet-status">Status: { this.state.outlet.is_on ? "ON" : "OFF"}</span>
                </div>
                <div className="w-100 p-1 trigger-table-container">
                    <TriggerTable 
                        showModal={this.state.showModal}
                        openModal={this.openModal}
                        closeModal={this.closeModal}
                        triggers={this.state.outlet.triggers} 
                        addNewTrigger={this.addNewTrigger} 
                        deleteTrigger={this.deleteTrigger}
                        newTrigger={this.state.newTrigger} />
                </div>
            </div>
        );
    }

}

export default Outlet;