import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import LoginFooter from './login_footer.jsx'

i18n.setLocale('en')

export default class LoginForm extends Component {
  render() {
    return (
      <div className="animate form login_form">
        <section className="login_content">
          <form>
            <h1>Login Form</h1>
            <div>
              <input type="text" className="form-control" placeholder="Username" required="" />
            </div>
            <div>
              <input type="password" className="form-control" placeholder="Password" required="" />
            </div>
            <div>
              <a className="reset_pass to_register" href="#signup">Lost your password?</a>
            </div>

            <div className="clearfix"></div>

            <div className="separator">

              <LoginFooter />
            </div>
          </form>
        </section>
      </div>
    )
  }
}
