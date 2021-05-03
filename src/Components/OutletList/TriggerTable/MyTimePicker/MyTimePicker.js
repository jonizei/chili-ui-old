import { Component } from 'react';
import './MyTimePicker.css';

class MyTimePicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            onTimeChange: props.onTimeChange,
            hours: [],
            minutes: []
        };

        this.createHourOptions = this.createHourOptions.bind(this);
        this.createMinOptions = this.createMinOptions.bind(this);
    }

    componentDidMount() {
        this.createHourOptions();
        this.createMinOptions();
    }

    createHourOptions() {

        var hoursOptions = [];
        for(var i = 0; i < 24; i++) {
            var strHour = "";
            if(i < 10) {
                strHour = "0" + i;
            }
            else strHour = "" + i;

            hoursOptions.push(<option key={i} value={i}>{ strHour }</option>);
        }

        this.setState({hours: hoursOptions});
    }

    createMinOptions() {

        var minOptions = [];
        for(var i = 0; i < 60; i++) {
            var strMin = "";
            if(i < 10) {
                strMin = "0" + i;
            }
            else strMin = "" + i;

            minOptions.push(<option key={i} value={i}>{ strMin }</option>);
        }

        this.setState({minutes: minOptions});
    }

    render() {
        return(
            <div className="my-time-picker d-flex justify-content-center">
                <select name="hourSelect" className="my-time-select" onChange={this.state.onTimeChange}>
                    { this.state.hours }
                </select>

                <select name="minuteSelect" className="my-time-select" onChange={this.state.onTimeChange}>
                    { this.state.minutes }
                </select>     
            </div>
        );
    }

}

export default MyTimePicker;