import React, { Component } from 'react';
import ScentSelector from './ScentSelector';
class TopBar extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div id="topbarWrapper">
                <div id="topbar">
                    <h1>Scented Room</h1>
                </div>
            </div>
            
        )
    }
}

export default TopBar