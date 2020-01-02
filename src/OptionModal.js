import React from 'react';
import Modal from 'react-modal';

export default class OptionModal extends React.Component {
    render(){
        return (
            <Modal
            isOpen={!!this.props.razorpay_payment_id}
            contentLabel="Payment ID"
            onRequestClose = {this.props.handleClearPaymentDetails}
            closeTimeoutMS = {200}
            className = "modal"
            >
            <h3>Thank you for your order.</h3>
            <h3>Here are your payment details</h3>
            <p>Payment ID: {this.props.razorpay_payment_id && <p>{this.props.razorpay_payment_id}</p>}</p>
            <p>Amount: {this.props.amount && <p>{this.props.amount} {this.props.currency}</p>}</p>
            <button onClick = {this.props.handleClearPaymentDetails} className="medium-button">Okay</button>
            </Modal>
        )
    }
}