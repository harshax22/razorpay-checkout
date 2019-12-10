import React, { Component } from 'react';
import './styles/Checkout.css';

export default class Checkout extends Component {
    constructor(props) {
      super(props);
      this.openCheckout = this.openCheckout.bind(this);
      this.changePaymentDetails = this.changePaymentDetails.bind(this);
      this.handleClearPaymentDetails = this.handleClearPaymentDetails.bind(this);
      this.state = {
          key: '',
          amount: '',
          currency: '',
          razorpay_payment_id: undefined
      };
    };
    changePaymentDetails(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
            );
    };
    handleSubmit(event) {
        event.preventDefault();
        };
    handleClearPaymentDetails() {
      this.setState(() => ({
          razorpay_payment_id: undefined
      }))
    }    
    openCheckout() {
        let options = {
            key: this.state.key,
            name: "Test",
            amount: (this.state.amount*100),
            currency: this.state.currency,
            handler: (response) =>  {
                    alert(response.razorpay_payment_id)
           },
            description: "RZP Des",
            prefill: {
                 contact: '+917019284852',
                 email: 'harshamarri18@gmail.com'
                 
            },
            notes: {
               address : "hello world"
            },
            theme: {
               image_frame: false
               }
        };
        let rzp = new window.Razorpay(options);
        rzp.open();
    };
    render() {
      return (
          <div>
              <div className = "header">
              <div className = "container">
              <h1 className = "header__title">Razorpay Checkout</h1>
              <h3 className = "header__subtitle">Your one stop payment destination!</h3>
              </div>
              </div>
              <div className = "container">
              <form onSubmit = {this.handleSubmit}>
              <input
              className = "enter-amount"
              type="text"
              name="currency"
              onChange={this.changePaymentDetails}
              placeholder="Currency"
              >
              </input>
              <input
              className = "enter-amount"
              type="text"
              name="key"
              onChange={this.changePaymentDetails}
              placeholder="API Key"
              >
              </input>
              <input 
               className = "enter-amount"
               type = "number"
               name="amount"
               value = {this.state.amount} 
               onChange = {this.changePaymentDetails}
               placeholder = "Enter Amount To Pay"
               >
               </input>
              <button 
              onClick = {this.openCheckout}
              className = "big-button"
              disabled = {!this.state.amount || !this.state.currency || !this.state.key}
              >Pay With Razorpay
              </button>
              </form>
              </div>
          </div>
      );
    };
};