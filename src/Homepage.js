import React, { Component } from 'react';

class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="homepage">
                <div id="leftMain" style={{backgroundImage: 'url(' + this.props.background + ')'}}></div>
                <div id="rightMain" onTransitionEnd={this.props.handleTransitionEnd} onClick={this.props.viewProductDetails}>
                    <img alt='green melts' src={this.props.image} />
                    <p id="mainDescription">{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Homepage