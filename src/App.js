import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Slider from 'rc-slider';
import 'rc-slider/dist/rc-slider.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import numeral from 'numeral';
import Map from './Map';
import data from './trees_data.json';

const trees = [
    {value: 'tree1', label: 'Дуб'},
    {value: 'tree2', label: 'Тополь'},
    {value: 'tree3', label: 'Клен'}
];


const format = (value) => numeral(value).format('0.0');


const ugleroda_oksid = (count, treeType) => {
    switch (treeType.value) {
        case 'tree1':
            return count * 0.009342847845;
        case 'tree2':
            return count * 0.01649086233;
        case 'tree3':
            return count * 0.01306542225;
        default:
            return count;
    }
};

const uglevodorody = (count, treeType) => {
    switch (treeType.value) {
        case 'tree1':
            return count * 0.02953072691;
        case 'tree2':
            return count * 0.05212405897;
        case 'tree3':
            return count * 0.0412969817;
        default:
            return count;
    }
};

const saja = (count, treeType) => {
    switch (treeType.value) {
        case 'tree1':
            return count * 0.3878838997;
        case 'tree2':
            return count * 0.6846456344;
        case 'tree3':
            return count * 0.5424327804;
        default:
            return count;
    }
};

const okisly_azota = (count, treeType) => {
    switch (treeType.value) {
        case 'tree1':
            return count * 0.3841467606;
        case 'tree2':
            return count * 0.6780492895;
        case 'tree3':
            return count * 0.5372066115;
        default:
            return count;
    }
};

const sern_gas = (count, treeType) => {
    switch (treeType.value) {
        case 'tree1':
            return count * 0.154221107;
        case 'tree2':
            return count * 0.272212401;
        case 'tree3':
            return count * 0.2156691318;
        default:
            return count;
    }
};

const okisly_metal = (count, treeType) => {
    switch (treeType.value) {
        case 'tree1':
            return count * 0.1411502797;
        case 'tree2':
            return count * 0.2491413613;
        case 'tree3':
            return count * 0.1973903499;
        default:
            return count;
    }
};

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTree: trees[0],
            countOfTrees: 0,
            selectedTreeInfo: null,
            trees: data
        };

        this.handleHideButton = () => this.setState({selectedTreeInfo: null});

        this.handleSelectTree = (e) => this.setState({selectedTree: e});

        this.handleChangeCountOfTrees = (value) => this.setState({countOfTrees: value});

        this.handleSelectTreeInfo = (tree) => this.setState({
            selectedTreeInfo: tree
        });
    }

    render() {
        const tree = this.state.selectedTreeInfo;
        return (
            <div id="app-root">
                <div className="page-header container">

                    <div className="trees-slider-panel">
                        <div>
                            <h2>Выберите дерево</h2>
                            <Select
                                value={this.state.selectedTree}
                                options={trees}
                                onChange={this.handleSelectTree}
                                clearable={false}
                            />
                        </div>
                        <div>
                            <h2>Вырубайте!</h2>
                            <Slider value={this.state.countOfTrees} onChange={this.handleChangeCountOfTrees} />
                        </div>
                    </div>
                    <div className="row data">
                        <div className="col-md-2">
                            <h3>Углерода оксид</h3>
                            <p>Аллергия, злокачественные опухоли и т.д.</p>
                            <h1>{format(ugleroda_oksid(this.state.countOfTrees, this.state.selectedTree))}</h1>
                            <h2>мкг</h2>
                        </div>
                        <div className="col-md-2">
                            <h3>Углеводороды</h3>
                            <h1>{format(uglevodorody(this.state.countOfTrees, this.state.selectedTree))}</h1>
                            <h2>мкг</h2>
                        </div>
                        <div className="col-md-2">
                            <h3>Сажа</h3>
                            <h1>{format(saja(this.state.countOfTrees, this.state.selectedTree))}</h1>
                            <h2>мкг</h2>
                        </div>
                        <div className="col-md-2">
                            <h3>Окислы азота</h3>
                            <h1>{format(okisly_azota(this.state.countOfTrees, this.state.selectedTree))}</h1>
                            <h2>мкг</h2>
                        </div>
                        <div className="col-md-2">
                            <h3>Сернистый газ</h3>
                            <h1>{format(sern_gas(this.state.countOfTrees, this.state.selectedTree))}</h1>
                            <h2>мкг</h2>
                        </div>
                        <div className="col-md-2">
                            <h3>Окислы металлов</h3>
                            <h1>{format(okisly_metal(this.state.countOfTrees, this.state.selectedTree))}</h1>
                            <h2>мкг</h2>
                        </div>
                    </div>

                </div>
                <div id="trees-main">
                    <Map trees={this.state.trees} onSelectTree={this.handleSelectTreeInfo} />
                    {tree && <div id="trees-panel">
                        <button type="button" className="close" onClick={this.handleHideButton}>
                            <span>&times;</span>
                        </button>
                        <div className="row">
                            <div className="col-md-6">
                                <h2>{tree.name}</h2>
                            </div>
                            <div className="col-md-6">
                                <p>Диаметр: {tree.diameter}</p>
                                <p>Высота: {tree.height}</p>
                                <p>{tree.age && <div>Возраст: {tree.age}</div>}</p>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
}

export default App;
