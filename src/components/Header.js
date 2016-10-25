/**
 * Created by matthew.jones on 25/10/2016.
 */
import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <header className="top">
                <h1>
                    Catch
                    <span className="ofThe">
                        <span className="of">of</span>
                        <span className="the">the</span>
                    </span>
                    Day
                </h1>
                <h3 className="tagline">{this.props.tagline}</h3>
            </header>
        );
    }
}

export default Header;