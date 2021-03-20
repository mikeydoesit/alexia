import React, { Component } from 'react';
import Header from './Header';
import Homepage from "./Homepage";
import Scents from './Scents';
import './App.css';
import ProductPage from './ProductPage';
import ScentSelector from './ScentSelector';
import Checkout from './Checkout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentScent: Scents[Math.floor(Math.random() * 15)],
      cart: []
    }
    this.toggleProductDetails = this.toggleProductDetails.bind(this)
    this.OnTransitionEnd = this.OnTransitionEnd.bind(this)
    this.changeView = this.changeView.bind(this)
    this.toggleScents = this.toggleScents.bind(this)
    this.toggleCart = this.toggleCart.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.deleteFromCart = this.deleteFromCart.bind(this)
    this.checkProduct = this.checkProduct.bind(this)
  }
componentDidMount() {
  this.setState({
    currentScent: Scents[Math.floor(Math.random() * 15)]
  })
}

addToCart(selectedProduct) {
  let cartItem = this.state.cart;
  let productID = `${selectedProduct.name} + ${selectedProduct.size}`;
  let productQty = selectedProduct.quantity;
  if (this.checkProduct(productID)) {
    let index = cartItem.findIndex(x => `${x.name} + ${x.size}` == productID);
    cartItem[index].quantity = Number(cartItem[index].quantity) + Number(productQty);
    this.setState({
      cart: cartItem
    });
  } else {
    cartItem.push(selectedProduct);
  }
}
checkProduct(productID) {
  let cart = this.state.cart;
  return cart.some(function(item) {
    return `${item.name} + ${item.size}` === productID;
  });
}

deleteFromCart(SKU, quantity) {

}

changeView(scent) {
  const scentSelector = document.getElementById('scents');
  if (scentSelector.classList.contains('active')){
    scentSelector.classList.remove('active')
  }
  this.setState({
    currentScent: scent
  })
}
toggleProductDetails() {
  const productImage = document.getElementById('rightMain');
  const heroSection = document.getElementById('leftMain');
  console.log(heroSection)
  productImage.classList.add("menu--animatable"); 
  if(!productImage.classList.contains("menu--visible")) {   
    productImage.classList.add("menu--visible");
  } else {
    productImage.classList.remove('menu--visible');   
  } 
}
toggleScents() {
  const scentSelector = document.getElementById("scents");

  if (scentSelector.classList.contains('active')) {
    scentSelector.classList.remove('active')
  } else {
    scentSelector.classList.add('active')
  }
}
toggleCart() {
  const cart = document.getElementById("checkoutWrapper");
  const cartLength = this.state.cart.length
  if (cartLength > 0) {
    if (cart.classList.contains('active')) {
      cart.classList.remove('active')
    } else {
      cart.classList.add('active')
    }
  } 
}
OnTransitionEnd() {
  const productImage = document.getElementById('rightMain');
  productImage.classList.remove("menu--animatable");
}

  render() {
    return (
      <div className="App">
        <Checkout order={this.state.cart}/>
        <ScentSelector handleClick={this.changeView}/>
        <Header toggleScents={this.toggleScents} toggleCart={this.toggleCart} />
        <ProductPage 
          bgdColor={this.state.currentScent.color}
          add={this.addToCart} 
          deleteFromCart={this.deleteFromCart} 
          productName={this.state.currentScent.name}
          image={this.state.currentScent.logoURL}
        />
        <Homepage
          viewProductDetails={this.toggleProductDetails}
          background={this.state.currentScent.name} 
          handleTransitionEnd={this.OnTransitionEnd} 
          image={this.state.currentScent.imageURLs[Math.floor(Math.random() * (this.state.currentScent.imageURLs.length))]} 
          description={this.state.currentScent.description}
        />
      </div>
    );
  }
}

export default App;
