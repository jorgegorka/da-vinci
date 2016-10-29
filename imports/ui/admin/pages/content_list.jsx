import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import ShowPageTempalte from './show_page_template.jsx';
import ContentBox from '../../utils/containers/content_box/content_box.jsx';
import ContentBoxHeader from '../../utils/containers/content_box/content_box_header.jsx';
import ContentBoxBody from '../../utils/containers/content_box/content_box_body.jsx';

import Loading from '../../utils/containers/loading.jsx';

export default class PagesContentList extends Component {
  render() {
    return(
      <div className="col-lg-12 col-xs-12 col-md-12">
        <ContentBox>
          <ContentBoxBody>
            <ShowPageTempalte page={ this.props.page } />
          </ContentBoxBody>
        </ContentBox>
      </div>
    );
  }
}


PagesContentList.propTypes = {
  page: PropTypes.object.isRequired,
};
