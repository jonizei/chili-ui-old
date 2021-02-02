import { Component } from 'react';
import './ControlPanelView.css';
import RecordTable from '../RecordTable/RecordTable';
import OutletList from '../OutletList/OutletList';
import Modal from 'react-modal';

class ControlPanelView extends Component {

    constructor() {
        super();

        this.state = {
            showModal: false
        };

    }

    render() {
        return(
            <div className="d-flex flex-row control-panel-view w-100 h-100 p-4">
                <div className="d-flex flex-column w-50 h-100 view-container mr-2">
                    <div className="w-100 p-2 view-title-container d-flex justify-content-center">
                        <span className="view-title">Records</span>
                    </div>
                    <div className="w-100 view-content flex-grow-1">
                        <RecordTable />
                    </div>
                </div>
                <div className="d-flex flex-column w-50 h-100 view-container ml-2">
                    <div className="w-100 p-2 view-title-container d-flex justify-content-center">
                        <span className="view-title">Outlets</span>
                    </div>
                    <div className="w-100 view-content flex-grow-1">
                        <OutletList />
                    </div>
                </div>
            </div>
        );
    }

}

export default ControlPanelView;