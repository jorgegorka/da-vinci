import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ContentRow from '../../../../utils/containers/row.jsx';
import ContentRichTextEditor from '../../../../utils/containers/rich_text_editor.jsx';
import ContentImageEditor from '../../../../utils/containers/image_editor.jsx';

export default class HomeSlider extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ContentRow>
        <h2>Slider</h2>
        <ContentRow>
          <ContentImageEditor contentType="slider-image-1" pageId={ this.props.pageId } className="col-lg-4 col-md-4 col-xs-6" />
          <ContentImageEditor contentType="slider-image-2" pageId={ this.props.pageId } className="col-lg-4 col-md-4 col-xs-6" />
          <ContentImageEditor contentType="slider-image-3" pageId={ this.props.pageId } className="col-lg-4 col-md-4 col-xs-6" />
        </ContentRow>
        <ContentRow>
          <ContentRichTextEditor contentType="slider-text-1" pageId={ this.props.pageId } onChange={ this.props.onChange } className="col-lg-4 col-md-4 col-xs-6" />
          <ContentRichTextEditor contentType="slider-text-2" pageId={ this.props.pageId } onChange={ this.props.onChange } className="col-lg-4 col-md-4 col-xs-6" />
          <ContentRichTextEditor contentType="slider-text-3" pageId={ this.props.pageId } onChange={ this.props.onChange } className="col-lg-4 col-md-4 col-xs-6" />
        </ContentRow>
      </ContentRow>
    );
  }
}

HomeSlider.propTypes = {
  onChange: PropTypes.func.isRequired,
  pageId: PropTypes.string.isRequired,
};
