import React, { Component } from 'react';

class Checkout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cart = this.props.order;
        // const sCart = cart.map(JSON.stringify);
        // const set = new Set(sCart);
        // const sArray = Array.from(set);
        // const order = sArray.map(JSON.parse);
        return (
            <div id="checkoutWrapper">
                <div id="checkout">
                    {cart.map((entry,i) => {
                        return (
                            <div key={i} className="orderWrapper">
                                <div>{entry.name}</div>
                                <div>{entry.size}</div>
                                <div>{'$ ' + entry.price.toFixed(2)}</div>
                                <div>{"Quantity: " + entry.quantity}</div>
                                <div>{'$ ' + (entry.price * entry.quantity).toFixed(2)}</div>
                                {/* <div>{"Quantity: " + sCart.filter(str => str === sArray[i]).length}</div> */}
                            </div>

                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Checkout