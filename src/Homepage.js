import React, { Component } from 'react';
import Scents from './Scents';

class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const activebgdName = this.props.background
        const heroSection = Scents.map((scent, index) => {
            return (
                <div key={index} className={`leftMain ${(scent.name === activebgdName)? 'active' : ''}`} style={{backgroundImage: 'url(' + scent.imageURLs[0] + ')'}}></div>
            )
        })
        return (
            <div id="homepage">
                {heroSection}
                <div id="rightMain" onTransitionEnd={this.props.handleTransitionEnd} onClick={this.props.viewProductDetails}>
                    <img alt='green melts' src={this.props.image} />
                    <p id="mainDescription">{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Homepage