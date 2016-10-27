import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { PageContents } from '../../../../lib/collections/page_contents.js';

import Loading from './loading.jsx';
import ImageEditor from '../editors/image.jsx';
import ContentColumn from './column.jsx';
import FormGroup from '../form/group.jsx';
import FormLabel from '../form/label.jsx';
import FormInput from '../form/input.jsx';

class ContentImageEditor extends Component {
  constructor(props) {
    super(props)
    this.state= {
      file: '',
      title: '',
    }
  }

  onImageChange(file) {
    this.setState({ file: file });
  }

  titleChange(title) {
    this.setState({ title: title });
  }

  onSubmit() {
    if (!this.state.file) { return }

    let that = this;
    let reader = new FileReader();
    reader.onload = function(fileLoadEvent) {
      Meteor.call('pageContents.addImage', that.props.pageId, that.props.pageContent._id, that.state.title, that.state.file.name, that.state.file.type, reader.result, function(error) {
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
        <FormGroup>
          <FormLabel htmlFor={ this.props.contentType } text="Add a title for the image (optional)" />
          <FormInput onChange={ this.titleChange.bind(this) } defaultValue={ this.props.pageContent.text } name={ this.props.contentType } id={ this.props.contentType } />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor={ this.props.contentType } text="Select an image" />
          <ImageEditor onChange={ this.onImageChange.bind(this) } editorName={ this.props.contentType } id={ this.props.contentType } />
        </FormGroup>
        <FormGroup>
          <button type="button" onClick={ this.onSubmit.bind(this) } className="btn btn-primary">Upload image</button>
        </FormGroup>
        <img src={ this.props.pageContent.path } alt={ this.props.pageContent.text } width={ this.props.previewSize || 500 } />
      </ContentColumn>
    );
  }
}

ContentImageEditor.propTypes = {
  previewSize: PropTypes.string,
  contentType: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default createContainer((props) => {
  Meteor.subscribe('pages');
  let subscription = Meteor.subscribe('pageContent', props.pageId);

  return {
    loading: !subscription.ready(),
    pageContent: PageContents.findOne({ contentType: props.contentType, pageId: props.pageId }),
  };
}, ContentImageEditor);
