import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ContentRow from '../../../../utils/containers/row.jsx';
import HomeMainContentText from './main_content_text.jsx';
import HomeMainContentImg from './main_content_img.jsx';

export default class HomeMainContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ContentRow>
        <h2>Main content</h2>
        <ContentRow>
          <HomeMainContentText content={ this.props.page.content } sliderId="1" />
          <HomeMainContentImg content={ this.props.page.content } sliderId="3" />
        </ContentRow>
      </ContentRow>
    );
  }
}

HomeMainContent.propTypes = {
  page: PropTypes.object.isRequired,
};
