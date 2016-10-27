import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { PageContents } from '../../../../lib/collections/page_contents.js';

import Loading from './loading.jsx';
import RichTextEditor from '../editors/rich_text.jsx';
import ContentColumn from './column.jsx';

class ContentRichTextEditor extends Component {
  constructor(props) {
    super(props)
  }

  onChange(content) {
    this.props.onChange(this.props.contentType, content);
  }

  render() {
    if (this.props.loading) {
      return(<Loading />);
    };

    return(
      <ContentColumn className={ this.props.className || '' }>
        <RichTextEditor onChange={ this.onChange.bind(this) } defaultValue={ this.props.content } editorName={ this.props.contentType } />
      </ContentColumn>
    );
  }
}

ContentRichTextEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  contentType: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default createContainer((props) => {
  Meteor.subscribe('pages');
  let subscription = Meteor.subscribe('pageContent', props.pageId);

  return {
    loading: !subscription.ready(),
    pageContent: PageContents.findOne({ contentType: props.contentType, pageId: props.pageId }),
  };
}, ContentRichTextEditor);
