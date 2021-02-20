import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Stocklist from './Stocklist';
import Scent from './Scent';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const scentList = Stocklist.map((scent, index) => {
      return (
        <Scent key={index} name={scent.name} handleClick={() => this.props.handleClick(scent)} />

      )
    })
    return (
      <div id="headerWrapper">
        <header>
          <div id="leftSide">
          <FontAwesomeIcon icon={faSearch}/>
          </div>
          <div id="center">
            <div id="logoWrapper">
              <h1 id="logo">
                alexia
              </h1>
            </div>
            <nav>
              <div id="scentsMegaNav">
                <div id="scentsHeader">
                  Scents
                </div>
                <div id="scents">
                  {scentList}
                </div>
              </div>
              <a>
                Blog
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