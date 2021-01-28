import React, { Component } from 'react';
import Header from './Header';
import Homepage from "./Homepage";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.toggleProductDetails = this.toggleProductDetails.bind(this)
    this.OnTransitionEnd = this.OnTransitionEnd.bind(this)
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
        <Header />
        <Homepage viewProductDetails={this.toggleProductDetails} handleTransitionEnd={this.OnTransitionEnd} />
      </div>
    );
  }
}

export default App;
