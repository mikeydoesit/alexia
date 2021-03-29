import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faInfoCircle, faVideo } from '@fortawesome/free-solid-svg-icons';


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
              <a id="scentsHeader">
                Scents
              </a>
            </nav>
          </div>
        <div id="rightSide">
          <FontAwesomeIcon icon={faVideo}/>
          <FontAwesomeIcon icon={faSearch}/>
          <FontAwesomeIcon icon={faShoppingCart} />
          <FontAwesomeIcon icon={faInfoCircle}/>
        </div>
        
      </header>
      </div>
        
    )
  }
}


export default Header