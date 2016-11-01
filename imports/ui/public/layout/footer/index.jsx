import React, { Component, PropTypes } from 'react';
import Alert from 'react-s-alert';
import i18n from 'meteor/universe:i18n';

export default class PublicFooter extends Component {
  render() {
    return(
      <footer className="footer footer-dark">
        <div className="footer-extra">
      		<div className="container">
      			<nav className="contact-info pull-left">
      				<a href="tel:+3706546340" className="phone"><i className="fa fa-phone"></i> +370 654 630 40</a>
      				<a href="mailto:info@sample.com" className="email"><i className="fa fa-envelope-o"></i> info@sample.com</a>
      			</nav>
      			<nav className="extra-menu pull-right">
      				<a href=""><i className="fa fa-lock"></i>Account</a>
      				<a href="">Wishlist</a>
      				<a href="">Shopping Cart</a>
      				<a href="">Logout</a>
      			</nav>
      		</div>
      	</div>
      </footer>
    );
  }
}
