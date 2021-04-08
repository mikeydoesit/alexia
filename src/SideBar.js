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
                    <svg id="logo" width="228" height="170" viewBox="0 0 228 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M55.5026 60.1489C54.4108 60.0496 53.3099 60 52.2 60C45 60 38.1333 61.6667 31.6 65C30.2962 65.6652 29.0295 66.365 27.8 67.0992V0H21.8H14.8H13H7H0V168.2H7H13H14.8H21.8H27.8V86.4C29.8 83.7333 32 81.1333 34.4 78.6C36.9333 75.9333 39.6 73.5333 42.4 71.4C45.2 69.2667 48.1333 67.6 51.2 66.4C52.0594 66.0263 52.9241 65.705 53.794 65.4361C54.1293 65.5483 54.4647 65.6696 54.8 65.8C57.2 66.6 59.6 68 62 70C65.6 73.0667 67.8667 76.8667 68.8 81.4C69.8667 85.8 70.4 90.2 70.4 94.6V168.2H77.4H83.4H85.2H92.2H98.2V89.6C98.2 85.0667 97.2667 81 95.4 77.4C93.5333 73.6667 91.0667 70.5333 88 68C85.0667 65.4667 81.6 63.5333 77.6 62.2C73.6 60.7333 69.4667 60 65.2 60C64.1364 60 63.08 60.0364 62.0309 60.1091C61.0939 60.0364 60.1502 60 59.2 60C57.9576 60 56.7252 60.0496 55.5026 60.1489ZM170.832 60.9159C172.012 60.8386 173.197 60.8 174.388 60.8C175.376 60.8 176.361 60.8283 177.34 60.885C178.352 60.8283 179.368 60.8 180.388 60.8C185.854 60.8 191.188 61.6667 196.388 63.4C201.588 65 206.321 67.5333 210.588 71C216.988 76.2 221.454 82.2667 223.988 89.2C226.521 96 227.521 103.067 226.988 110.4C226.454 117.6 224.588 124.8 221.388 132C218.188 139.067 214.054 145.4 208.988 151C203.921 156.467 198.121 160.933 191.588 164.4C185.054 167.867 178.188 169.6 170.988 169.6C170.02 169.6 169.049 169.564 168.076 169.492C167.054 169.564 166.024 169.6 164.988 169.6C163.858 169.6 162.725 169.551 161.588 169.453C160.397 169.551 159.197 169.6 157.988 169.6C153.054 169.6 148.054 168.667 142.988 166.8C142.322 166.548 141.655 166.275 140.988 165.979V167.8H134.988H127.988H126.188H120.188H113.188V45.2C113.188 38.8 111.854 33.3333 109.188 28.8C106.521 24.2667 102.988 20.5333 98.5875 17.6C94.3208 14.6667 89.4542 12.5333 83.9875 11.2C78.5208 9.86667 72.9875 9.2 67.3875 9.2L67.1875 5.6C68.1208 5.46667 69.1208 5.26667 70.1875 5C71.2542 4.86666 72.3875 4.8 73.5875 4.8C74.9208 4.66667 76.3875 4.6 77.9875 4.6C79.2779 4.6 80.5431 4.63356 81.7831 4.70068C82.7841 4.63356 83.8523 4.6 84.9875 4.6C86.0871 4.6 87.1685 4.62437 88.2315 4.67311C89.1014 4.62437 90.0201 4.6 90.9875 4.6C99.1208 4.6 106.254 5.93333 112.388 8.6C118.654 11.1333 123.854 14.8 127.988 19.6C132.254 24.4 135.454 30.1333 137.587 36.8C139.854 43.4667 140.988 50.8 140.988 58.8V67.4995C142.596 66.6629 144.263 65.8964 145.988 65.2C152.921 62.2667 160.054 60.8 167.388 60.8C168.542 60.8 169.69 60.8386 170.832 60.9159ZM170.043 65.696C172.396 66.227 174.711 67.0616 176.988 68.2C181.254 70.3333 185.188 73.8 188.788 78.6C192.921 84.0667 195.788 90.0667 197.388 96.6C199.121 103 199.788 109.467 199.387 116C199.121 122.4 197.921 128.6 195.788 134.6C193.654 140.6 190.788 145.933 187.188 150.6C183.721 155.267 179.588 159 174.788 161.8C172.033 163.453 169.116 164.618 166.036 165.295C163.173 164.674 160.223 163.642 157.188 162.2C151.988 159.667 146.588 155.6 140.988 150V85.4C146.054 79.1333 151.654 74.2 157.788 70.6C161.845 68.1829 165.93 66.5482 170.043 65.696Z" fill="black"/>
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