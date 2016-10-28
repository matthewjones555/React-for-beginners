/**
 * Created by matthew.jones on 25/10/2016.
 */
import React from 'react';

const Header = ({ tagline }) => (
    <header className="top">
        <h1>
            Catch
            <span className="ofThe">
                <span className="of">of</span>
                <span className="the">the</span>
            </span>
            Day
        </h1>
        <h3 className="tagline">{tagline}</h3>
    </header>
);

Header.propTypes = {
    tagline: React.PropTypes.string.isRequired,
};

export default Header;