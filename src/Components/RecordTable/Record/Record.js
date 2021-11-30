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
                <td>{ this.state.record.air_temperature }</td>
                <td>{ this.state.record.air_pressure}</td>
                <td>{ this.state.record.humidity }</td>
                <td>{ this.state.record.light }</td>
                <td>{ this.state.record.datetime }</td>
            </tr>
        );
    }

}

export default Record;