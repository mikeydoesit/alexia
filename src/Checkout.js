import React, { Component } from 'react';

class Checkout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cart = this.props.order;
        const sCart = cart.map(JSON.stringify);
        const set = new Set(sCart);
        const sArray = Array.from(set);
        const order = sArray.map(JSON.parse);
        return (
            <div id="checkoutWrapper">
                <div id="checkout">
                    {order.map((entry,i) => {
                        return (
                            <div key={i} className="orderWrapper">
                                <div>{entry[0]}</div>
                                <div>{entry[1]}</div>
                                <div>{entry[2]}</div>
                                <div>{entry[3]}</div>
                                <div>{"Quantity: " + sCart.filter(str => str === sArray[i]).length}</div>
                            </div>

                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Checkout