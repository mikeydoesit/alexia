import React, { Component } from 'react';
import Header from './Header';
import Homepage from "./Homepage";
import Scents from './Scents';
import './App.css';
import ProductPage from './ProductPage';
import ScentSelector from './ScentSelector';

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
    this.addToCart = this.addToCart.bind(this)
    this.deleteFromCart = this.deleteFromCart.bind(this)
  }
componentDidMount() {
  this.setState({
    currentScent: Scents[Math.floor(Math.random() * 15)]
  })
}

addToCart(price, quantity, orderedScent) {
  this.setState(prevState => ({
    cart: [...prevState.cart, {
      quantityReq: quantity,
      price: price,
      orderedScent: orderedScent
    }]
  }))
  console.log(this.state.cart)

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
OnTransitionEnd() {
  const productImage = document.getElementById('rightMain');
  productImage.classList.remove("menu--animatable");
}

  render() {
    return (
      <div className="App">
        <ScentSelector handleClick={this.changeView}/>
        <Header toggleScents={this.toggleScents} />
        <ProductPage 
          bgdColor={this.state.currentScent.color}
          add={this.addToCart} 
          deleteFromCart={this.deleteFromCart} 
          productName={this.state.currentScent.name} 
          price={this.state.currentScent.price}

        />
        <Homepage 
          viewProductDetails={this.toggleProductDetails}
          background={this.state.currentScent.imageURLs[0]} 
          handleTransitionEnd={this.OnTransitionEnd} 
          image={this.state.currentScent.imageURLs[Math.floor(Math.random() * (this.state.currentScent.imageURLs.length))]} 
          description={this.state.currentScent.description}
        />
      </div>
    );
  }
}

export default App;
