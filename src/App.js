import React, { Component } from 'react';
import Header from './Header';
import Homepage from "./Homepage";
import Stocklist from './Stocklist';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentScent: {}
    }
    this.toggleProductDetails = this.toggleProductDetails.bind(this)
    this.OnTransitionEnd = this.OnTransitionEnd.bind(this)
    this.changeView = this.changeView.bind(this)
  }
componentDidMount() {
  this.setState({
    currentScent: Stocklist[Math.floor(Math.random() * 3)]
  })
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
