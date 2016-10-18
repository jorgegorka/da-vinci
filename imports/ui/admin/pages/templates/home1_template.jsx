import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

export default class Home1Template extends Component {
  render() {
    return(
      <div className="col-lg-12 col-xs-12 col-md-12">
        <h2>Home 1 template</h2>
      </div>
    );
  }
}


Home1Template.propTypes = {
  page: PropTypes.object.isRequired,
};
