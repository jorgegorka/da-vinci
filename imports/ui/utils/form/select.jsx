import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class FormSelect extends Component {
  constructor(props) {
    super(props)
  }

  updateParentId(event) {
    this.props.updateParentId(event.target.value);
  }

  render() {
    let allItems = this.props.selectOptions.selectItems.map(function(selectItem, index) {
      return (<option key={ index } value={ selectItem.value }>{ selectItem.title }</option>);
    });

    return(
      <select onChange={ this.updateParentId.bind(this) } value={ this.props.selectOptions.defaultValue } className="form-control" name={ this.props.selectOptions.selectName }>
        { allItems }
      </select>
    );
  }
}

FormSelect.propTypes = {
  selectOptions: PropTypes.object.isRequired,
};
