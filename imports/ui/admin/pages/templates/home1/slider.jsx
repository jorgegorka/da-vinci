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

  onImageChange(contentId, file) {
    let that = this;
    let reader = new FileReader();
    reader.onload = function(fileLoadEvent) {
      Meteor.call('pages.addImage', that.props.pageId, contentId, file.name, file.size, file.type, reader.result, function(error) {
        if (error) {
          console.log(error);
        } else {
          console.log('all fine');
        }
      });
    };
    reader.readAsBinaryString(file);
  }

  render() {
    return(
      <ContentRow>
        <h2>Slider</h2>
        <ContentRow>
          <ContentImageEditor content={ this.props.content.image1 } contentId="image1" onChange={ this.onImageChange.bind(this) } className="col-lg-4 col-md-4 col-xs-6" />
          <HomeSliderImg content={ this.props.content.image2 } contentId="image2" />
          <HomeSliderImg content={ this.props.content.image3 } contentId="image3" />
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
