import React, { Component } from 'react';
import Display from './Display';
import OptionModal from './OptionModal';
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
	}
	changePaymentDetails(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	handleSubmit(event) {
		event.preventDefault();
	}
	handleClearPaymentDetails() {
		this.setState(() => ({
			razorpay_payment_id: undefined
		}));
	}
	openCheckout() {
		let options = {
			key: this.state.key,
			amount: this.state.amount * 100,
			currency: this.state.currency,
			handler: (response) => {
				this.setState(() => ({
					razorpay_payment_id: response.razorpay_payment_id
				}));
			},
			description: 'Razorpay Test Description',
			prefill: {
				contact: '+919999999999',
				email: 'test@test.com'
			},
			notes: {
				address: 'hello world'
			}
		};
		let rzp = new window.Razorpay(options);
		rzp.open();
	}
	render() {
		return (
			<div>
				<Display
					handleSubmit={this.handleSubmit}
					changePaymentDetails={this.changePaymentDetails}
					openCheckout={this.openCheckout}
					amount={this.state.amount}
					currency={this.state.currency}
					keyID={this.state.key}
				/>
				<OptionModal
					razorpay_payment_id={this.state.razorpay_payment_id}
					handleClearPaymentDetails={this.handleClearPaymentDetails}
					amount={this.state.amount}
					currency={this.state.currency}
				/>
			</div>
		);
	}
}
