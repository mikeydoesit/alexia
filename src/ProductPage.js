import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Sizes from './Sizes';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
                price: Sizes[0].price,
                size: Sizes[0].size,
                quantity: 0,
                selectedProduct: {},
                isAdded: false
        }
        this.addOne = this.addOne.bind(this)
        this.subtractOne = this.subtractOne.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }
    componentDidMount() {
        this.setState({
            price: Sizes[0].price,
            size: Sizes[0].size
        });
    }
    changePrice(price, size) {
        this.setState({
            price: price,
            size: size
        });
    }
    addToCart(image, name, price, quantity, size) {
        this.setState(
          {
            selectedProduct: {
              image: image,
              name: name,
              price: price,
              quantity: quantity,
              size: size
            }
          },
          function() {
            this.props.add(this.state.selectedProduct);
          }
        );
        this.setState(
          {
            isAdded: true
          },
          function() {
            setTimeout(() => {
              this.setState({
                isAdded: false,
                selectedProduct: {}
              });
            }, 3500);
          }
        );
      }
    addOne() {
        const counter = this.state.quantity;
        this.setState({
            quantity: counter + 1
        });
    }
    subtractOne() {
        const counter = this.state.quantity;
        if(counter > 0) {
            this.setState({
                quantity: counter - 1
            });
        }   
    }
    render() {
        const sizes = Sizes.map((size, index) => {
            return (
                <div key={index} className="size" onClick={() => this.changePrice(size.price, size.size)}>
                    <label htmlFor={size.size}>
                        <input type="radio" name="size" value={size.size} />
                        <span className="checkmark">{size.size}</span>
                    </label>
                </div>
            )
        })
        return(
            <div id="productPage" style={{backgroundImage: this.props.bgdColor }}>
                <h1 id="productName">{this.props.productName + ' - Soy Wax Melts'}</h1>
                <h4 id="price">{'$ ' + this.state.price.toFixed(2)}</h4>
                <div id="sizeSelector">
                    <h5>SELECT SIZE</h5>
                    <div id="sizes">
                        {sizes}
                    </div>
                </div>

                <div id="quantitySelector">
                    <h5>QUANTITY</h5>
                    <div id="quantity">
                        <FontAwesomeIcon icon={faMinus} onClick={() => {
                            this.subtractOne()
                        }}/>
                        <div id="counter">{this.state.quantity}</div>
                        <FontAwesomeIcon icon={faPlus} onClick={() => {
                            this.addOne()
                        }}/>
                    </div>
                </div>
                <div id="addToCart" onClick={() => {
                    this.addToCart(this.props.image, this.props.productName, this.state.price, this.state.quantity,  this.state.size)
                    }
                }>
                    <span>ADD TO CART</span>
                </div>
            </div>
        )
    }
}

export default ProductPage