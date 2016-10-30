import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import PageContentContainer from '../../../utils/containers/page_content.jsx';
import ContentColumn from '../../../utils/containers/column.jsx';

export default class Home1Template extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ContentColumn className="col-lg-12 col-xs-12 col-md-12">
        <PageContentContainer pageId={ this.props.pageId } contentType='home-slider' title='Slider'  includeText={ true } />
        <PageContentContainer pageId={ this.props.pageId } contentType='main-content' title='Main content'  includeText={ true } />
        <PageContentContainer pageId={ this.props.pageId } contentType='bottom-content' title='Bottom content'  includeText={ true } />
      </ContentColumn>
    );
  }
}

Home1Template.propTypes = {
  pageId: PropTypes.string.isRequired,
};
