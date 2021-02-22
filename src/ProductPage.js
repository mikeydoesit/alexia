import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Sizes from './Sizes';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            miniCart: {
                price: null,
                quantity: null
            }
        }
    }
    componentDidMount() {
        this.setState({
            price: Sizes[Math.floor(Math.random() * 3)].price
        });
    }
    changePrice(price) {
        this.setState({
            price: price
        });
    }

    render() {
        const sizes = Sizes.map((size, index) => {
            return (
                <div key={index} className="size" onClick={() => this.changePrice(size.price)}>
                <input type="radio" name={size.size} value={size.size} />
                <label htmlFor={size.size}>{size.size}</label>
                </div>
            )
        })
        return(
            <div id="productPage" style={{backgroundColor: this.props.bgdColor}}>
                <h1 id="productName">{this.props.productName + ' - Soy Wax Melts'}</h1>
                <h4 id="price">{'$ ' + this.state.price}</h4>
                <div id="sizeSelector">
                    <h5>SELECT SIZE</h5>
                    <div id="sizes">
                        {sizes}
                    </div>
                </div>

                <div id="quantitySelector">
                    <h5>QUANTITY</h5>
                    <div id="quantity">
                        <FontAwesomeIcon icon={faMinus}/>
                        <div>{this.props.counter}</div>
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>
                </div>
                <div id="addToCart">
                    <span>ADD TO CART</span>
                </div>
            </div>
        )
    }
}

export default ProductPage