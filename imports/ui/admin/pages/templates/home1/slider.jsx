import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { PageContents } from '../../../../../../lib/collections/page_contents.js';

import Loading from '../../../../utils/containers/loading.jsx';
import ContentRow from '../../../../utils/containers/row.jsx';
import ContentColumn from '../../../../utils/containers/column.jsx';
import ContentRichTextEditor from '../../../../utils/containers/rich_text_editor.jsx';
import ContentImageEditor from '../../../../utils/containers/image_editor/index.jsx';

class HomeSlider extends Component {
  constructor(props) {
    super(props)
    this.state = { sliderImages: [] };
  }

  addImage(event) {
    event.preventDefault();
    let newSlider = this.state.sliderImages;
    let imageOptions = {
      pageId: this.props.pageId,
      pageContentId: 'new',
      contentType: 'home-slider',
      includeText: true,
    };
    newSlider.push(
      <ContentImageEditor key={ newSlider.length + 1 } imageOptions={ imageOptions } className="col-lg-12 col-md-12 col-xs-12" />
    );

    this.setState({ sliderImages: newSlider });
  }

  renderImages() {
    return this.props.pageContents.map( function(pageContent) {
      return <ContentImageEditor key={ pageContent._id } imageOptions={ { pageId: pageContent.pageId, pageContentId: pageContent._id, contentType: 'home-slider', includeText: true } } className="col-lg-12 col-md-12 col-xs-12" />
    });
  }

  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <ContentRow>
        <ContentColumn className="col-lg-12 col-md-12 col-xs-12">
          <h2>Slider</h2>
          <ContentRow>
            { this.renderImages() }
            { this.state.sliderImages }
          </ContentRow>
          <ContentRow>
            <ContentColumn className="col-lg-1 col-md-2 col-xs-2">
              <button type="button" onClick={ this.addImage.bind(this) } className="btn btn-primary">Add slider image</button>
            </ContentColumn>
          </ContentRow>
        </ContentColumn>
      </ContentRow>
    );
  }
}

HomeSlider.propTypes = {
  onChange: PropTypes.func.isRequired,
  pageId: PropTypes.string.isRequired,
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pageContentsForType', props.pageId, 'home-slider');

  return {
    loading: !subscription.ready(),
    pageContents: PageContents.find({}, { $sort: { name: 0 }}).fetch(),
  };
}, HomeSlider);
