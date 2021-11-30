import { Component } from 'react';
import './TimeTriggerRow.css';

class TimeTriggerRow extends Component {

    weekdayArray = [
        "EVERYDAY"
        , "MONDAY"
        , "TUESDAY"
        , "WEDNESDAY"
        , "THURSDAY"
        , "FRIDAY"
        , "SATURDAY"
        , "SUNDAY"
    ];

    constructor(props) {
        super(props);

        this.state = {
            trigger: props.trigger,
            deleteTrigger: props.deleteTrigger
        };

        this.getWeekday = this.getWeekday.bind(this);
        this.getTime = this.getTime.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return {trigger: props.trigger};
    }

    getWeekday(weekday) {

        if(weekday > -1 && weekday < this.weekdayArray.length) {
            return this.weekdayArray[weekday];
        }

        return "";
    }

    getTime(time) {

        var strHour = "" + time.hour;
        var strMinutes = "" + time.minutes;

        if(time.hour < 10) {
            strHour = "0" + strHour;
        }
        
        if(time.minutes < 10) {
            strMinutes = "0" + strMinutes
        }

        return strHour + ":" + strMinutes;
    }

    render() {
        return(
            <tr>
                <td>TIME</td>
                <td>
                    { this.getWeekday(this.state.trigger.weekday) }
                </td>

                <td>
                    { this.getTime(this.state.trigger.time) }
                </td>

                <td>
                    { this.state.trigger.duration } min
                </td>

                <td>
                    <button className="trigger-control-btn" onClick={() => this.state.deleteTrigger(this.state.trigger.id)}>Delete</button>
                </td>
            </tr>
        );
    }

}

export default TimeTriggerRow;