import { Component } from 'react';

class Record extends Component {

    constructor(props) {
        super(props);

        this.state = {
            record: props.record
        };
    }   

    render() {
        return(
            <tr>
                <td>{ this.state.record.id }</td>
                <td>{ this.state.record.airTemperature }</td>
                <td>{ this.state.record.airPressure }</td>
                <td>{ this.state.record.humidity }</td>
                <td>{ this.state.record.light }</td>
                <td>{ this.state.record.recordTime }</td>
            </tr>
        );
    }

}

export default Record;