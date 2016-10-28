/**
 * Created by matthew.jones on 27/10/2016.
 */
import React from 'react';
import { formatPrice } from '../helpers';

const Fish = (props) => {
    const isAvailable = props.details.status === 'available';
    const buttonText = isAvailable ? 'Add to order' : 'Sold out';

    return (
        <li className="menu-fish">
            <img src={props.details.image} alt={props.details.name}/>
            <h3 className="fish name">
                {props.details.name}
                <span className="price">{formatPrice(props.details.price)}</span>
            </h3>
            <p>{props.details.desc}</p>
            <button onClick={() => props.addToOrder(props.index)} disabled={!isAvailable}>{buttonText}</button>
        </li>
    );
};

Fish.propTypes = {
    details: React.PropTypes.object.isRequired,
    index: React.PropTypes.string.isRequired,
    addToOrder: React.PropTypes.func.isRequired,
};

export default Fish;