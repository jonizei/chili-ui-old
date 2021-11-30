import { Component } from 'react';
import './RecordTable.css';
import Record from './Record/Record';
import axios from 'axios';

class RecordTable extends Component {

    constructor() {
        super();

        this.state = {
            records: [],
            isLoadingRecords: true
        };

        this.loadRecords = this.loadRecords.bind(this);
        this.loadDummyRecords = this.loadDummyRecords.bind(this);
    }

    componentDidMount() {
        this.loadRecords();
        //this.loadDummyRecords();
    }

    async loadRecords() {
        await axios({
            method: "get",
            url: "http://192.168.8.20:8080/get-records",
        }).then(res => {
            var recordList = [];
            console.log(res.data);
            res.data.forEach(element => recordList.push(<Record record={element} />));
            this.setState({records: recordList, isLoadingRecords: false});
        }).catch(error => console.log(error));
    }

    loadDummyRecords() {
        var dummyRecords = [
            {id: 1, air_temperature: 23, air_pressure: 0, humidity: 0, light: 0, datetime: 0},
            {id: 2, air_temperature: 25, air_pressure: 0, humidity: 0, light: 0, datetime: 0},
            {id: 3, air_temperature: 19, air_pressure: 0, humidity: 0, light: 0, datetime: 0},
            {id: 4, air_temperature: 28, air_pressure: 0, humidity: 0, light: 0, datetime: 0}
        ];

        var tmpArray = [];
        dummyRecords.forEach(element => tmpArray.push(<Record record={element} />));

        this.setState({records: tmpArray, isLoadingRecords: false});
    }

    render() {
        if(!this.state.isLoadingRecords) {
            return(
                <div className="w-100 d-flex justify-content-center p-2">
                    <div className="record-table-container w-100 d-flex justify-content-center">
                        <table className="record-table">
                            <tbody>
                                <tr>
                                    <th>Id</th>
                                    <th>Air temperature (C)</th>
                                    <th>Air pressure (hPa)</th>
                                    <th>Humidity (%)</th>
                                    <th>Light</th>
                                    <th>Record time</th>
                                </tr>
        
                                {this.state.records}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div className="w-100 d-flex p-2">
                    <p>Loading records...</p>
                </div>
            );
        }
    }

}

export default RecordTable;