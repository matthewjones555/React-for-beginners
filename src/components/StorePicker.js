/**
 * Created by matthew.jones on 25/10/2016.
 */
import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }

    goToStore(event) {
        event.preventDefault();
        this.context.router.transitionTo(`/store/${this.storeInput.value}`);
    }

    render () {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input type="text" ref={(input) => this.storeInput = input} required placeholder="Store Name" defaultValue={getFunName()} />
                <button type="submit">Visit store &rarr;</button>
            </form>
        );
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object,
};

export default StorePicker;