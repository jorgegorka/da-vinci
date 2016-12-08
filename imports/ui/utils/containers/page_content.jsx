import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import { PageContents } from '../../../../lib/collections/page_contents.js';

import Loading from './loading.jsx';
import ContentColumn from './column.jsx';
import ContentRow from './row.jsx';
import PageContentRow from './page_content_row.jsx';
import ContentBox from './content_box/content_box.jsx';
import ContentBoxHeader from './content_box/content_box_header.jsx';
import ContentBoxBody from './content_box/content_box_body.jsx';
import ContentImageEditor from './image_editor/index.jsx';

class PageContentContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { newContents: [] };
  }

  addNewContent() {
    return <ContentImageEditor
             imageOptions={ { pageId: this.props.pageId, pageContentId: 'new-' + this.props.contentType, contentType: this.props.contentType, includeText: this.props.includeText } }
             formTitle={ i18n.__('containers.page_content.new_content') }
           />
  }

  renderImages() {
    if (this.props.pageContents.length > 0) {
      return this.props.pageContents.map( (pageContent) => {
        return <ContentImageEditor
                 key={ pageContent._id }
                 imageOptions={ { pageId: pageContent.pageId, pageContentId: pageContent._id, contentType: this.props.contentType, includeText: this.props.includeText } }
                 formTitle={ i18n.__('containers.page_content.edit_content') }
               />
      });
    };
  }

  renderContent() {
    if (this.props.pageContents.length > 0) {
      return this.props.pageContents.map( (pageContent) => {
        return <PageContentRow
                 key={ pageContent._id }
                 pageContent={ pageContent }
                 contentType={ this.props.contentType }
                 includeText={ this.props.includeText }
               />
      });
    }
  }

  showAddContentButton() {
    return((this.props.multipleContents === true) || ((this.props.multipleContents === false) && (this.props.pageContents.length === 0)))
  }

  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <ContentRow>
        <ContentColumn className="col-lg-12 col-md-12 col-xs-12">
          <ContentBox>
            <ContentBoxHeader headerTitle={ this.props.title } />
            <ContentBoxBody>
              <table className="table">
                <thead>
                  <tr>
                    <th>{ i18n.__('containers.page_content.image') }</th>
                    <th>{ i18n.__('containers.page_content.title') }</th>
                    <th>{ i18n.__('containers.page_content.options') }</th>
                  </tr>
                </thead>
                <tbody>
                  { this.renderContent() }
                  { this.state.newContents }
                </tbody>
              </table>
            </ContentBoxBody>
          </ContentBox>
          { this.showAddContentButton() ?
            <ContentRow>
              <ContentColumn className="col-lg-12 col-md-12 col-xs-12">
                <button type="button" className="btn btn-info" data-toggle="modal" data-target={ "#content-new-" + this.props.contentType }>{ i18n.__('containers.page_content.new_content') }</button>
              </ContentColumn>
              { this.addNewContent() }
            </ContentRow>
            : null
          }
        </ContentColumn>
        { this.renderImages() }
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
    pageContents: PageContents.find({ contentType: props.contentType }, { sort: { order: 1 }}).fetch(),
  };
}, PageContentContainer);
