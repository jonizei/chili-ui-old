import { Component } from 'react';
import './Outlet.css';
import TriggerTable from '../TriggerTable/TriggerTable';

class Outlet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            outlet: props.outlet
        };
    }

    render() {
        return(
            <div className="w-100 outlet-container mb-2">
                <div className="w-100 d-flex flex-row outlet-details-container p-1">
                    <div className="w-50">
                        <span className="outlet-details">{ this.state.outlet.id } { this.state.outlet.name }</span>
                    </div>
                    <div className="w-50 d-flex justify-content-end">
                        <label className="toggle-switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="w-100 p-1 trigger-table-container">
                    <TriggerTable />
                </div>
            </div>
        );
    }

}

export default Outlet;