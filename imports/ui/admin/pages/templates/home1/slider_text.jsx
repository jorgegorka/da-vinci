import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class HomeSliderText extends Component {
  constructor(props) {
    super(props)
  }

  onChange(content) {
    this.props.onChange('content4', content);
  }

  render() {
    return(
      <ContentColumn className="col-lg-4 col-md-4 col-xs-6">
        <RichTextEditor onChange={ this.onChange.bind(this) } defaultValue={ this.props.content.content4 } editorName="mainContent" />
      </ContentColumn>
    );
  }
}

HomeSliderText.propTypes = {
  content: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
