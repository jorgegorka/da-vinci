import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

export default class PublicProduct1SidebarContent extends Component {
  render() {
    return(
      <li>
        <a href={ this.props.pageContent.imagePath } target="_blank">
          <i className="fa fa-file-pdf-o"></i> { this.props.pageContent.imageTitle }
        </a>
      </li>
    );
  }
}

PublicProduct1SidebarContent.propTypes = {
  pageContent: PropTypes.object.isRequired
};
