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
        <PageContentContainer pageId={ this.props.pageId } contentType='home-slider' title={ i18n.__('home1.slider.header') }  includeText={ true } multipleContents={ true } />
        <PageContentContainer pageId={ this.props.pageId } contentType='main-content' title={ i18n.__('home1.main_content.header') }  includeText={ true } multipleContents={ false } />
        <PageContentContainer pageId={ this.props.pageId } contentType='bottom-content' title={ i18n.__('home1.bottom_content.header') }  includeText={ true } multipleContents={ false } />
      </ContentColumn>
    );
  }
}

Home1Template.propTypes = {
  pageId: PropTypes.string.isRequired,
};
