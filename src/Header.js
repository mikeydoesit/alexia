import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="headerWrapper">
        <header>
          <div id="leftSide">
            <div id="logoWrapper">
              <img id="logo" src="images/new-logo.png" />
            </div>
          </div>
          <div id="center">
            <nav>
              <a id="scentsHeader" onClick={this.props.toggleScents}>
                Scents
              </a>
              <a>
                Vlog
              </a>
              <a>
                About
              </a>
            </nav>
          </div>
        <div id="rightSide">
          <FontAwesomeIcon icon={faSearch}/>
          <FontAwesomeIcon icon={faShoppingCart} onClick={this.props.toggleCart}/>
        </div>
        
      </header>
      </div>
        
    )
  }
}


export default Header