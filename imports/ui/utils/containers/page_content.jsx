import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { PageContents } from '../../../../lib/collections/page_contents.js';

import Loading from './loading.jsx';
import ContentColumn from './column.jsx';
import ContentRow from './row.jsx';
import ContentImageEditor from './image_editor/index.jsx';

class PageContentContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { newContents: [] };
  }

  addNewImage() {
    let newContent = this.state.newContents;
    newContent.push(
      <ContentImageEditor key={ newContent.length + 1 } imageOptions={ { pageId: this.props.pageId, pageContentId: 'new', contentType: this.props.contentType, includeText: this.props.includeText } } className="col-lg-12 col-md-12 col-xs-12" />
    );

    this.setState({ newContents: newContent });
  }

  renderImages() {
    if (this.props.pageContents.length > 0) {
      return this.props.pageContents.map( (pageContent) => {
        return <ContentImageEditor key={ pageContent._id } imageOptions={ { pageId: pageContent.pageId, pageContentId: pageContent._id, contentType: this.props.contentType, includeText: this.props.includeText } } className="col-lg-12 col-md-12 col-xs-12" />
      });
    } else {
      return <ContentImageEditor imageOptions={ { pageId: this.props.pageId, pageContentId: 'new', contentType: this.props.contentType, includeText: this.props.includeText } } className="col-lg-12 col-md-12 col-xs-12" />
    }
  }

  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <ContentRow>
        <ContentColumn className="col-lg-12 col-md-12 col-xs-12">
          <h2>{ this.props.title }</h2>
          <ContentRow>
            { this.renderImages() }
            { this.state.newContents }
          </ContentRow>
          { this.props.multipleContents === true ?
            <ContentRow>
              <ContentColumn className="col-lg-12 col-md-12 col-xs-12">
                <button className="btn btn-info" onClick={ this.addNewImage.bind(this) }>Add more content</button>
              </ContentColumn>
            </ContentRow>
            : null
          }
        </ContentColumn>
      </ContentRow>
    );
  }
}

PageContentContainer.propTypes = {
  pageId: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  includeText: PropTypes.bool.isRequired,
  multipleContents: PropTypes.bool.isRequired,
};

export default createContainer((props) => {
  let subscription = Meteor.subscribe('pageContentsForType', props.pageId, props.contentType);

  return {
    loading: !subscription.ready(),
    pageContents: PageContents.find({ contentType: props.contentType }, { $sort: { order: 0 }}).fetch(),
  };
}, PageContentContainer);
