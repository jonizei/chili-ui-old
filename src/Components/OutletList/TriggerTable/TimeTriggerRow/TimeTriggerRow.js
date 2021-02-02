import { Component } from 'react';
import MyTimePicker from '../MyTimePicker/MyTimePicker';
import './TimeTriggerRow.css';

class TimeTriggerRow extends Component {

    weekdayArray = [
        "MONDAY"
        , "TUESDAY"
        , "WEDNESDAY"
        , "THURSDAY"
        , "FRIDAY"
        , "SATURDAY"
        , "SUNDAY"
    ];

    constructor() {
        super();

        this.state = {
            weekdays: []
        };

        this.createWeekdayOptions = this.createWeekdayOptions.bind(this);
    }

    componentDidMount() {
        this.createWeekdayOptions();
    }

    createWeekdayOptions() {

        var weekdayOptions = [];
        for(var i = 0; i < this.weekdayArray.length; i++) {
            weekdayOptions.push(<option key={i} value={i}>{ this.weekdayArray[i] }</option>);
        }

        this.setState({weekdays: weekdayOptions});
    }

    render() {
        return(
            <tr>
                <td>
                    <select className="my-select-box">
                        { this.state.weekdays }
                    </select>
                </td>

                <td>
                    <MyTimePicker />
                </td>

                <td>
                    <input type="number" className="duration-input" />
                    <span className="p-1">Minutes</span>
                </td>

                <td>
                    <button className="trigger-control-btn">Update</button>
                </td>

                <td>
                    <button className="trigger-control-btn">Delete</button>
                </td>
            </tr>
        );
    }

}

export default TimeTriggerRow;