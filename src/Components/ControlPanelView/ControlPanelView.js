import { Component } from 'react';
import './ControlPanelView.css';
import RecordTable from '../RecordTable/RecordTable';
import OutletList from '../OutletList/OutletList';

class ControlPanelView extends Component {

    render() {
        return(
            <div className="d-flex flex-row control-panel-view">
                <div className="record-view d-flex flex-column w-50 view-container">
                    <div className="w-100 p-2 view-title-container d-flex justify-content-center flex-grow-0">
                        <span className="view-title">Records</span>
                    </div>
                    <div className="view-list-container w-100 view-content flex-grow-1">
                        <RecordTable />
                    </div>
                </div>
                <div className="outlet-view d-flex flex-column w-50 view-container">
                    <div className="w-100 p-2 view-title-container d-flex justify-content-center flex-grow-0">
                        <span className="view-title">Outlets</span>
                    </div>
                    <div className="view-list-container w-100 view-content flex-grow-1">
                        <OutletList />
                    </div>
                </div>
            </div>
        );
    }

}

export default ControlPanelView;