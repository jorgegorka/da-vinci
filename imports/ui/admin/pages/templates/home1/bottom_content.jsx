import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ContentRow from '../../../../utils/containers/row.jsx';
import HomeBottomContentText from './bottom_content_text.jsx';

export default class HomeBottomContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ContentRow>
        <h2>Bottom content</h2>
        <ContentRow>
          <HomeBottomContentText content={ this.props.page.content } sliderId="1" />
        </ContentRow>
      </ContentRow>
    );
  }
}

HomeBottomContent.propTypes = {
  page: PropTypes.object.isRequired,
};
