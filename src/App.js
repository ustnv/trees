import React, { Component } from 'react';
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
            <div id="app-root">
                <h1>Городской лесничий</h1>
                <div id="trees-main">
                    <Map />
                    {this.state.showPanel && <div id="trees-panel">
                        <h2>Тополь</h2>
                        <button onClick={this.handleHideButton}>Скрыть</button>
                    </div>}
                </div>
            </div>
        );
    }
}

export default App;
