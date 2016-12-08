import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

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
      imageTitle: props.pageContent.imageTitle || '',
      text: props.pageContent.text || '',
      targetLink: props.pageContent.targetLink || '',
      order: props.pageContent.order || 10,
    }
  }

  addImage(pageContentParams, fileData) {
    let that = this;
    Meteor.call('pageContents.addImage', pageContentParams, fileData, function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log('all fine');
        $("#content-" + that.props.imageOptions.pageContentId).modal('hide');
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
      <div className="modal" id={ "content-" + this.props.imageOptions.pageContentId }>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title">{ this.props.formTitle }</h4>
            </div>
            <div className="modal-body">
              <ContentImageEditorForm onChange={ this.onChange.bind(this) } includeText={ this.props.imageOptions.includeText } pageContent={ this.props.pageContent } onSubmit={ this.onSubmit.bind(this) } />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default pull-left" data-dismiss="modal">{ i18n.__('utils.containers.image_editor.index.discard') }</button>
              <button type="submit" onClick={ this.onSubmit.bind(this) }  className="btn btn-primary">{ i18n.__('utils.containers.image_editor.index.save_content') }</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ContentImageEditor.propTypes = {
  previewSize: PropTypes.string,
  imageOptions: PropTypes.object.isRequired,
  className: PropTypes.string,
  formTitle: PropTypes.string.isRequired,
};

export default createContainer((props) => {
  if (!props.imageOptions.pageContentId || (props.imageOptions.pageContentId.substring(0, 3) === 'new')) {
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
