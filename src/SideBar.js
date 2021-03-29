import React, { Component } from 'react';
import ScentSelector from './ScentSelector';
class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div id="sidebarWrapper">
                <div id="sidebar">
                    <div id="icons">
                    <svg id="logo" width="100" height="102" viewBox="0 0 100 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M62.208 99.264L51.696 68.16H23.184L12.096 99.264H22.896V102H0.864V99.264H7.632L44.352 0.335996H56.16L92.448 99.264H99.072V102H51.984V99.264H62.208ZM38.016 27.264L24.48 64.992H50.544L38.016 27.264Z" fill="url(#paint0_radial)"/>
                    <defs>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(285.5 160.5) rotate(90) scale(210.5 285.5)">
                    <stop offset="0.734375" stop-color="#FCF552"/>
                    <stop offset="1" stop-color="#FF6060"/>
                    </radialGradient>
                    </defs>
                    </svg>

                    <div className="iconWrapper" onClick={this.props.toggleScents}>
                            <img className="icon" src="images/scentIcon.png" />
                    </div>
                    <div className="iconWrapper" onClick={this.props.toggleCart}>
                            <img className="icon" src="images/cartIcon.png" />
                    </div>
                    <div className="iconWrapper">
                            <img className="icon" src="images/videoIcon.png" />
                    </div>
                    <div className="iconWrapper">
                            <img className="icon" src="images/infoIcon.png" />
                    </div>
                </div>
            </div>
                <ScentSelector handleClick={this.props.changeView}/>
            </div>
            
        )
    }
}

export default SideBar