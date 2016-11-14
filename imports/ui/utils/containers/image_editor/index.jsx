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
      file: { name: '', type: '', size: 0 },
      imageTitle: props.pageContent.imageTitle,
      text: props.pageContent.text,
      targetLink: props.pageContent.text,
      order: 1,
    }
  }

  addImage(pageContentParams, fileData) {
    Meteor.call('pageContents.addImage', pageContentParams, fileData, function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log('all fine');
      }
    });
  }

  onChange(fieldName, fieldValue) {
    this.setState({ [fieldName]: fieldValue });
  }

  onSubmit() {
    let pageContentParams = {
      pageId: this.props.imageOptions.pageId,
      pageContentId: this.props.imageOptions.pageContentId,
      text: this.state.text,
      imageTitle: this.state.imageTitle,
      order: this.state.order,
      targetLink: this.state.targetLink,
      fileName: this.state.file.name,
      fileSize: this.state.file.size,
      fileType: this.state.file.type,
      contentType: this.props.imageOptions.contentType
    };

    if (this.state.file.name !== '') {
      let that = this;
      let reader = new FileReader();
      reader.onload = function(fileLoadEvent) {
        that.addImage(pageContentParams, reader.result);
      };
      reader.readAsBinaryString(this.state.file);
    } else {
      this.addImage(pageContentParams, '');
    }

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
        order: 1
      }
    }
  }
  let subscription = Meteor.subscribe('pageContent', props.imageOptions.pageContentId);

  return {
    loading: !subscription.ready(),
    pageContent: PageContents.findOne({ _id: props.imageOptions.pageContentId }),
  };
}, ContentImageEditor);
