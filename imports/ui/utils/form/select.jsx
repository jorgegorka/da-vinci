import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class FormSelect extends Component {
  constructor(props) {
    super(props)
  }

  onChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    let allItems = this.props.selectOptions.map(function(selectItem, index) {
      return (<option key={ index } value={ selectItem.value }>{ selectItem.title }</option>);
    });

    return(
      <select onChange={ this.onChange.bind(this) } value={ this.props.defaultValue } className="form-control" name={ this.props.name }>
        { allItems }
      </select>
    );
  }
}

FormSelect.propTypes = {
  selectOptions: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  name: PropTypes.string.isRequired,
};
