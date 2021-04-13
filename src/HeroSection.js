import React, { Component } from 'react';
import Scents from './Scents';

class HeroSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const activebgdName = this.props.background
        const heroSection = Scents.map((scent, index) => {
            return (
                <div key={index} className={`leftMain ${(scent.name === activebgdName)? 'active' : ''}`} style={{backgroundImage: 'url(' + scent.imageURLs[0] + ')'}}>
                    <div id="panel1">
                        <div id="panel1top"></div>
                        <div id="panel1down"></div>
                    </div>
                    <div id="panel2">
                        <div id="panel2top"></div>
                        <div id="panel2down"></div>
                    </div>
                </div>
            )
        })
        return (
            {heroSection}
        )
    }
}
export default HeroSection