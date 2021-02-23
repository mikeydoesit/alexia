import React, { Component } from 'react';
import Header from './Header';
import Homepage from "./Homepage";
import Scents from './Scents';
import './App.css';
import ProductPage from './ProductPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentScent: {},
      cart: []
    }
    this.toggleProductDetails = this.toggleProductDetails.bind(this)
    this.OnTransitionEnd = this.OnTransitionEnd.bind(this)
    this.changeView = this.changeView.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.deleteFromCart = this.deleteFromCart.bind(this)
  }
componentDidMount() {
  this.setState({
    currentScent: Scents[Math.floor(Math.random() * 15)]
  })
}

addToCart(SKU, quantity) {

}

deleteFromCart(SKU, quantity) {

}

changeView(scent) {
  console.log(scent)
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
OnTransitionEnd() {
  const productImage = document.getElementById('rightMain');
  productImage.classList.remove("menu--animatable");
}

  render() {
    return (
      <div className="App">
        <Header handleClick={this.changeView}/>
        <ProductPage 
          bgdColor={this.state.currentScent.color}
          addToCart={this.addToCart} 
          deleteFromCart={this.deleteFromCart} 
          productName={this.state.currentScent.name} 
          price={this.state.currentScent.price} 
        />
        <Homepage 
          viewProductDetails={this.toggleProductDetails} 
          handleTransitionEnd={this.OnTransitionEnd} 
          image={this.state.currentScent.imageURL} 
          description={this.state.currentScent.description}
        />
      </div>
    );
  }
}

export default App;
