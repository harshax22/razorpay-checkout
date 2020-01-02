import React from 'react';

function Display(props) {
	return (
		<div>
			<div className="header">
				<div className="container">
					<h1 className="header__title">Razorpay Checkout</h1>
					<h3 className="header__subtitle">Your one stop payment destination!</h3>
				</div>
			</div>
			<div className="container">
				<form onSubmit={props.handleSubmit}>
					<input
						className="enter-amount"
						type="text"
						name="currency"
						onChange={props.changePaymentDetails}
						placeholder="Currency"
					/>
					<input
						className="enter-amount"
						type="text"
						name="key"
						onChange={props.changePaymentDetails}
						placeholder="API Key"
					/>
					<input
						className="enter-amount"
						type="number"
						name="amount"
						value={props.amount}
						onChange={props.changePaymentDetails}
						placeholder="Enter Amount To Pay"
					/>
					<button
						onClick={props.openCheckout}
						className="big-button"
						disabled={!props.amount || !props.currency || !props.key}
					>
						Pay with Razorpay
					</button>
				</form>
			</div>
		</div>
	);
}

export default Display;
