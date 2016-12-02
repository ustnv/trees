import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Map from './Map';



class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showPanel: true
        };

        this.showPanel = () => this.setState({ showPanel: true });

        this.closePanel = () => this.setState({ showPanel: false });

        this.handleHideButton = () => this.closePanel();
    }

    render() {
        return (
            <div id="app-root" className="container">
                <div className="page-header">
                    <h1>Городской лесничий</h1>
                </div>
                <div id="trees-main">
                    <Map />
                    {this.state.showPanel && <div id="trees-panel">
                        <button type="button" className="close" onClick={this.handleHideButton}>
                            <span>&times;</span>
                        </button>
                        <h2>Тополь</h2>
                    </div>}
                </div>
            </div>
        );
    }
}

export default App;
