import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ContentRow from '../../../../utils/containers/row.jsx';
import ContentRichTextEditor from '../../../../utils/containers/rich_text_editor.jsx';
import ContentImageEditor from '../../../../utils/containers/image_editor.jsx';
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
          <ContentImageEditor imageContent={ this.props.content.image1 } contentId="image1" pageId={ this.props.pageId } className="col-lg-4 col-md-4 col-xs-6" />
          <ContentImageEditor imageContent={ this.props.content.image2 } contentId="image2" pageId={ this.props.pageId } className="col-lg-4 col-md-4 col-xs-6" />
          <ContentImageEditor imageContent={ this.props.content.image3 } contentId="image3" pageId={ this.props.pageId } className="col-lg-4 col-md-4 col-xs-6" />
        </ContentRow>
        <ContentRow>
          <ContentRichTextEditor content={ this.props.content.content1 } contentId="content1" onChange={ this.props.onChange } className="col-lg-4 col-md-4 col-xs-6" />
          <ContentRichTextEditor content={ this.props.content.content2 } contentId="content2" onChange={ this.props.onChange } className="col-lg-4 col-md-4 col-xs-6" />
          <ContentRichTextEditor content={ this.props.content.content3 } contentId="content3" onChange={ this.props.onChange } className="col-lg-4 col-md-4 col-xs-6" />
        </ContentRow>
      </ContentRow>
    );
  }
}

HomeSlider.propTypes = {
  content: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  pageId: PropTypes.string.isRequired,
};
