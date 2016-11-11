import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import Legal1Content from './content.jsx'

export default class Legal1Template extends Component {
  render() {
    return(
      <div className="wrapper">
        <div className="content">
          <Legal1Content pageId={ this.props.page._id } />
        </div>
      </div>
    );
  }
}

Legal1Template.propTypes = {
  page: PropTypes.object.isRequired
};
