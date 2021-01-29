import { Component } from 'react';
import Outlet from './Outlet/Outlet';

class OutletList extends Component {

    constructor() {
        super();

        this.state = {
            outlets: []
        };

        this.loadOutlets = this.loadOutlets.bind(this);
    }

    componentDidMount() {
        this.loadOutlets();
    }

    loadOutlets() {
        var dummyOutlets = [
            {id: 1, name: "Outlet 1"}
            , {id: 2, name: "Outlet 2"}
            , {id: 3, name: "Outlet 3"}
        ];

        var outletList = [];
        dummyOutlets.forEach(element => outletList.push(<Outlet outlet={element} />));

        this.setState({outlets: outletList});
    }

    render() {
        return(
            <div className="w-100 d-flex flex-column p-2">
                { this.state.outlets }
            </div>
        );
    }

}

export default OutletList;