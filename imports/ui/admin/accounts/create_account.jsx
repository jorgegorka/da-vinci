import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import LoginFooter from './login_footer.jsx'

i18n.setLocale('en')

export default class CreateAccount extends Component {
  render() {
    return (
      <div id="register" className="animate form registration_form">
        <section className="login_content">
          <form>
            <h1>Create Account</h1>
            <div>
              <input type="text" className="form-control" placeholder="Username" required="" />
            </div>
            <div>
              <input type="email" className="form-control" placeholder="Email" required="" />
            </div>
            <div>
              <input type="password" className="form-control" placeholder="Password" required="" />
            </div>
            <div>
              <a className="btn btn-default submit" href="index.html">Submit</a>
            </div>

            <div className="clearfix"></div>

            <div className="separator">
              <p className="change_link">Already a member ?
                <a href="#signin" className="to_register"> Log in </a>
              </p>

              <div className="clearfix"></div>
              <br />

              <LoginFooter />
            </div>
          </form>
        </section>
      </div>
    )
  }
}
