import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import ContentBox from '../../utils/containers/content_box.jsx';
import ContentBoxHeader from '../../utils/containers/content_box_header.jsx';
import ContentBoxBody from '../../utils/containers/content_box_body.jsx';

import Loading from '../../utils/containers/loading.jsx';

export default class PagesContentList extends Component {
  render() {
    return(
      <div className="col-lg-12 col-xs-12 col-md-12">
        <ContentBox>
          <ContentBoxHeader headerTitle="Page content" />
          <ContentBoxBody>
            <ShowPageTempalte pageId={ this.props.pageId } />
          </ContentBoxBody>
        </ContentBox>
      </div>
    );
  }
}


PagesContentList.propTypes = {
  pageId: PropTypes.string.isRequired,
};
