import { Component } from 'react';
import Outlet from './Outlet/Outlet';
import axios from 'axios';

class OutletList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            outlets: [],
            isLoadingOutlets: true
        };

        this.loadOutlets = this.loadOutlets.bind(this);
        this.getOutletElements = this.getOutletElements.bind(this);
        this.updateOutlet = this.updateOutlet.bind(this);
        this.loadDummyOutlets = this.loadDummyOutlets.bind(this);
    }

    componentDidMount() {
        this.loadOutlets();
        //this.loadDummyOutlets();
    }

    async loadOutlets() {
        await axios({
            method: "get",
            url: "http://192.168.8.20:8080/get-outlets"
        }).then(res => {
            this.setState({outlets: res.data, isLoadingOutlets: false});
        }).catch(error => console.log(error));
    }

    loadDummyOutlets() {
        var dummyOutlets = [
            {name: "Outlet 1", triggers: [], stay_on: false, is_on: false},
            {name: "Outlet 2", triggers: [], stay_on: false, is_on: false},
            {name: "Outlet 3", triggers: [], stay_on: false, is_on: false},
            {name: "Outlet 3", triggers: [], stay_on: false, is_on: false},
            {name: "Outlet 3", triggers: [], stay_on: false, is_on: false}
        ];

        this.setState({outlets: dummyOutlets, isLoadingOutlets: false});
    }

    async updateOutlet(outlet) {
        var temp = this.state.outlets;
        var index = temp.indexOf(outlet);
        temp[index] = outlet;
        
        await axios({
            method: "post",
            url: "http://192.168.8.20:8080/update-outlets",
            data: JSON.stringify(temp)
        }).catch(error => console.log(error));
    }

    getOutletElements() {
        var temp = [];
        this.state.outlets.forEach(element => temp.push(<Outlet key={element.id} outlet={element} updateOutlet={this.updateOutlet} />));
        return temp;
    }

    render() {
        if(this.state.isLoadingOutlets) {
            return(
                <div className="w-100 d-flex flex-column p-2">
                    <p>Loading Outlets...</p>
                </div>
            );
        }
        else {
            return(
                <div className="w-100 p-2">
                    { this.getOutletElements() }
                </div>
            );
        }
    }

}

export default OutletList;