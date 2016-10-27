/**
 * Created by matthew.jones on 25/10/2016.
 */
import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fishes: {},
            order: {},
        };

        this.addFish = this.addFish.bind(this);
        this.updateFish = this.updateFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
    }

    componentWillMount() {
        this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
            context: this,
            state: 'fishes',
        });

        const order = localStorage.getItem(`order-${this.props.params.storeId}`);

        if (order) {
            this.setState({
                order: JSON.parse(order),
            });
        }
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
    }

    addFish(fish) {
        const fishes = {...this.state.fishes};
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        //this updates the state and tells react to update the DOM
        this.setState({
            fishes: fishes
        });
    }

    updateFish(key, fish) {
        const fishes = {...this.state.fishes};
        fishes[key] = fish;
        this.setState({
            fishes: fishes,
        });
    }

    addToOrder(key) {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({
            order: order,
        });
    }

    loadSamples() {
        this.setState({
            fishes: sampleFishes,
        });
    }

    render () {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood market" />
                    <ul>
                        { Object.keys(this.state.fishes).map((key) => <Fish addToOrder={this.addToOrder} key={key} index={key} details={this.state.fishes[key]} />) }
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} params={this.props.params} />
                <Inventory addFish={this.addFish} updateFish={this.updateFish} loadSamples={this.loadSamples} fishes={this.state.fishes} />
            </div>
        );
    }
}

export default App;