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
          <FontAwesomeIcon icon={faSearch}/>
          </div>
          <div id="center">
            <div id="logoWrapper">
              <h1 id="logo">
                Created By Alexia
              </h1>
            </div>
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
        <FontAwesomeIcon icon={faShoppingCart}/>
        </div>
        
      </header>
      </div>
        
    )
  }
}


export default Header