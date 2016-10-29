import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { PageContents } from '../../../../../lib/collections/page_contents.js';

import Loading from '../loading.jsx';
import ContentImageEditorForm from './form.jsx';
import ContentRow from '../row.jsx';
import ContentColumn from '../column.jsx';

class ContentImageEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imageTitle: props.pageContent.imageTitle,
      text: props.pageContent.text,
      order: 0,
    }
  }

  onChange(fieldName, fieldValue) {
    this.setState({ [fieldName]: fieldValue });
  }

  onSubmit() {
    if (!this.state.file) { return }

    let pageContentParams = {
      pageId: this.props.imageOptions.pageId,
      pageContentId: this.props.imageOptions.pageContentId,
      text: this.state.text,
      imageTitle: this.state.imageTitle,
      order: this.state.order,
      fileName: this.state.file.name,
      fileType: this.state.file.type,
      contentType: this.props.imageOptions.contentType
    }

    let reader = new FileReader();

    reader.onload = function(fileLoadEvent) {
      Meteor.call('pageContents.addImage', pageContentParams, reader.result, function(error) {
        if (error) {
          console.log(error);
        } else {
          console.log('all fine');
        }
      });
    };
    reader.readAsBinaryString(this.state.file);
  }

  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <ContentColumn className={ this.props.className }>
        <ContentRow>
          <ContentImageEditorForm onChange={ this.onChange.bind(this) } includeText={ this.props.imageOptions.includeText } pageContent={ this.props.pageContent } onSubmit={ this.onSubmit.bind(this) } />
          <ContentColumn className="col-lg-6 col-md-6 col-xs-12">
            <ContentRow>
              <img src={ this.props.pageContent.imagePath } alt={ this.props.pageContent.imageTitle } width={ this.props.previewSize || 500 } />
            </ContentRow>
            <ContentRow>
              <div dangerouslySetInnerHTML={ { __html: this.state.text } } >
              </div>
            </ContentRow>
          </ContentColumn>
        </ContentRow>
      </ContentColumn>
    );
  }
}

ContentImageEditor.propTypes = {
  previewSize: PropTypes.string,
  imageOptions: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default createContainer((props) => {
  if (!props.imageOptions.pageContentId || (props.imageOptions.pageContentId === 'new')) {
    return {
      loading: false,
      pageContent: {
        text: '',
        contentType: props.imageOptions.contentType,
        imagePath: '',
        imageTitle: '',
        pageId: props.imageOptions.pageId,
        order: 0
      }
    }
  }
  let subscription = Meteor.subscribe('pageContent', props.imageOptions.pageContentId);

  return {
    loading: !subscription.ready(),
    pageContent: PageContents.findOne({ _id: props.imageOptions.pageContentId }),
  };
}, ContentImageEditor);
