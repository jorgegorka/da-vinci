import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ImageEditor from '../editors/image.jsx';
import ContentColumn from './column.jsx';
import FormGroup from '../form/group.jsx';
import FormLabel from '../form/label.jsx';
import FormInput from '../form/input.jsx';

export default class ContentImageEditor extends Component {
  constructor(props) {
    super(props)
    this.state= {
      file: this.props.imageContent.path,
      title: this.props.imageContent.title,
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
      Meteor.call('pages.addImage', that.props.pageId, that.props.contentId, that.state.title, that.state.file.name, that.state.file.type, reader.result, function(error) {
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
    return(
      <ContentColumn className={ this.props.className }>
        <FormGroup>
          <FormLabel htmlFor={ this.props.contentId } text="Add a title for the image (optional)" />
          <FormInput onChange={ this.titleChange.bind(this) } defaultValue={ this.props.imageContent.title } name={ this.props.contentId } id={ this.props.contentId } />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor={ this.props.contentId } text="Select an image" />
          <ImageEditor onChange={ this.onImageChange.bind(this) } editorName={ this.props.contentId } id={ this.props.contentId } />
        </FormGroup>
        <FormGroup>
          <button type="button" onClick={ this.onSubmit.bind(this) } className="btn btn-primary">Upload image</button>
        </FormGroup>
        <img src={ this.props.imageContent.path } alt={ this.props.imageContent.title } width={ this.props.previewSize || 500 } />
      </ContentColumn>
    );
  }
}

ContentImageEditor.propTypes = {
  previewSize: PropTypes.string,
  imageContent: PropTypes.object.isRequired,
  contentId: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
