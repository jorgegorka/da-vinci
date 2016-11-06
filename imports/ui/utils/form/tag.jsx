import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TagsInput from 'react-tagsinput';

export default class FormInputTag extends Component {
  constructor(props) {
    super(props);
    this.state = { tags: props.defaultValue }
  }

  handleChange(tags) {
    this.setState({ tags: tags })
    this.props.onChange(tags);
  }

  render() {
    return(
      <TagsInput value={ this.state.tags } onChange={ this.handleChange.bind(this) } className="form-control" addKeys={ [9, 13, 188] } />
    );
  }
}
FormInputTag.propTypes = {
  defaultValue: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
