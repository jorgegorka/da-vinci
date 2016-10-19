import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ContentRow from '../../../../utils/containers/row.jsx';
import HomeSliderImg from './slider_img.jsx';
import HomeSliderText from './slider_text.jsx';

export default class HomeSlider extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ContentRow>
        <h2>Slider</h2>
        <ContentRow>
          <HomeSliderImg content={ this.props.page.content } sliderId="1" />
          <HomeSliderImg content={ this.props.page.content } sliderId="2" />
          <HomeSliderImg content={ this.props.page.content } sliderId="3" />
        </ContentRow>
        <ContentRow>
          <HomeSliderText content={ this.props.page.content } sliderId="1" />
          <HomeSliderText content={ this.props.page.content } sliderId="2" />
          <HomeSliderText content={ this.props.page.content } sliderId="3" />
        </ContentRow>
      </ContentRow>
    );
  }
}

HomeSlider.propTypes = {
  page: PropTypes.object.isRequired,
};
