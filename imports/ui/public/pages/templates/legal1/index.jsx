import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import Legal1Content from './content.jsx';
import HeaderMetaTag from '../../../../utils/helpers/header_meta_tag.jsx';

export default class Legal1Template extends Component {
  render() {
    return(
      <div className="wrapper">
        <div className="content">
          <Legal1Content pageId={ this.props.page._id } />
        </div>
        <HeaderMetaTag  metaInfo={ this.props.page.metaInfo } />
      </div>
    );
  }
}

Legal1Template.propTypes = {
  page: PropTypes.object.isRequired
};
