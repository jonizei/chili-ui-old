import { Component } from 'react';
import './RecordTable.css';
import Record from './Record/Record';

class RecordTable extends Component {

    constructor() {
        super();

        this.state = {
            records: [],
            testRecord: {
                id: 1,
                airTemperature: 23,
                airPressure: 10,
                humidity: 10,
                light: 1000,
                recordTime: "10:10:10"
            }
        };

        this.loadRecords = this.loadRecords.bind(this);
    }

    componentDidMount() {
        this.loadRecords();
    }

    loadRecords() {
        var dummyRecords = [
            {id: 1, airTemperature: 23, airPressure: 20, humidity: 50, light: 2000, recordTime: "10:10:10"}
            , {id: 2, airTemperature: 23, airPressure: 20, humidity: 50, light: 2000, recordTime: "10:10:10"}
            , {id: 3, airTemperature: 23, airPressure: 20, humidity: 50, light: 2000, recordTime: "10:10:10"}
            , {id: 4, airTemperature: 23, airPressure: 20, humidity: 50, light: 2000, recordTime: "10:10:10"}
        ];

        var recordList = [];
        dummyRecords.forEach(element => recordList.push(<Record record={element} />));

        this.setState({records: recordList});
    }

    render() {
        return(
            <div className="w-100 d-flex justify-content-center">
                <table className="record-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Air temperature</th>
                            <th>Air pressure</th>
                            <th>Humidity</th>
                            <th>Light</th>
                            <th>Record time</th>
                        </tr>

                        {this.state.records}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default RecordTable;