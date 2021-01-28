import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
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
              <a>
                Shop
              </a>
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

export default Header