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

const trees1 = (count, treeType) => {
    switch (treeType.value) {
        case 'tree1':
            return count;
        case 'tree2':
            return count;
        case 'tree3':
            return count;
        default:
            return count;
    }
};

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

const euro = (count, treeType) => {
    switch (treeType.value) {
        case 'tree1':
            return count * 14.97493345;
        case 'tree2':
            return count * 24.6698079;
        case 'tree3':
            return count * 20.94156214;
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
                            <h1>Роль деревьев</h1>
                            <br/>
                            <p>
                                Дерево - конкретная финансовая выгода. Недооцененный актив наших городов.
Очищение воздуха от вредных веществ, представляющих серьезную опасность для здоровья людей.
Очищение и уменьшение объемов грязных стоков и ливневых вод, основных источников загрязнения грунтовых вод, рек, ручьев и озер.
Экономия энергии для отопления и охлаждения зданий, понижение температуры летом и защита от ветра зимой.
                            </p>
                            <img src={'gif_1.gif'} className="gif" loop="infinite"/>
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
                            <h3>Деревья</h3>
                            <h1 className="red">-{trees1(this.state.countOfTrees, this.state.selectedTree)}</h1>
                            <h2>штук</h2>
                        </div>
                        <div className="col-md-2">
                            <h3>Углеводороды</h3>
                            <h1>+{format(uglevodorody(this.state.countOfTrees, this.state.selectedTree))}</h1>
                            <h2>мкг</h2>
                            <br/>
                            <p>Нарушение системы дыхания и кровообращения, астма, частые простудные заболевания</p>
                        </div>
                        <div className="col-md-2">
                            <h3>Сажа</h3>
                            <h1>+{format(saja(this.state.countOfTrees, this.state.selectedTree))}</h1>
                            <h2>мкг</h2>
                            <br/>
                            <p>Расстройства нервной и сердечнососудистой систем, нарушения функции печени, неврастении, раздражительность</p>
                        </div>
                        <div className="col-md-2">
                            <h3>Окислы азота</h3>
                            <h1>+{format(okisly_azota(this.state.countOfTrees, this.state.selectedTree))}</h1>
                            <h2>мкг</h2>
                            <br/>
                            <p>Заболевания дыхательных путей, повышенная смертность от сердечных и раковых заболеваний</p>
                        </div>
                        <div className="col-md-2">
                            <h3>Сернистый газ</h3>
                            <h1>+{format(sern_gas(this.state.countOfTrees, this.state.selectedTree))}</h1>
                            <h2>мкг</h2>
                            <br/>
                            <p>Cильный яд, вызывает беспокойство и депрессию, психические расстройства, нарушения сна, частые головные боли</p>
                        </div>
                        <div className="col-md-2">
                            <h3>Ущерб</h3>
                            <h1 className="red">-{format(euro(this.state.countOfTrees, this.state.selectedTree))}</h1>
                            <h2>евро</h2>
                        </div>
                    </div>

                </div>
                <hr/>
                <h1 className="head">Оцените свой район</h1>
                <br/>
                <div id="trees-main">

                    <Map trees={this.state.trees} onSelectTree={this.handleSelectTreeInfo} />
                    {tree && <div id="trees-panel">
                        <button type="button" className="close" onClick={this.handleHideButton}>
                            <span>&times;</span>
                        </button>
                        <div className="row">
                            <div className="col-md-12 header">
                                <h2>{tree.name}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <img src={'tree.png'} className="tree"/>
                            </div>
                            <div className="col-md-6">

                            <table className="table">
                                <tr>
                                    <td><p>Диаметр</p></td>
                                    <td><p>{format(tree.diameter)} м.</p></td>
                                </tr>
                                <tr>
                                    <td><p>Высота</p></td>
                                    <td><p>{format(tree.height)} м.</p></td>
                                </tr>
                                <tr>
                                    <td><p>Возраст (лет)</p></td>
                                    <td><p>{tree.age}</p></td>
                                </tr>


                            </table>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
}

export default App;
