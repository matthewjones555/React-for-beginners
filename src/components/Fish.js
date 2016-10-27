/**
 * Created by matthew.jones on 27/10/2016.
 */
import React from 'react';
import { formatPrice } from '../helpers';

const Fish = (props) => (
    <li className="menu-fish">
        <img src={props.details.image} alt={props.details.name} />
        <h3 className="fish name">
            {props.details.name}
            <span className="price">{formatPrice(props.details.price)}</span>
        </h3>
        <p>{props.details.desc}</p>
        <button>Add to order</button>
    </li>
);

export default Fish;
